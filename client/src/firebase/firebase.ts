import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

import config from '../config';
import { LoginFormData } from 'components/Auth/Login';
import { CreateAccountFormData } from 'components/Auth/CreateAccount';
import { ForgotPasswordFormData } from 'components/Auth/ForgotPassword';
import { ApplicationFormData } from 'components/Application/ApplicationDrawerForm';
import getCount, { GetCount } from 'helpers/getCount';
import { Application, LoginTypes, StageValue } from 'types';
import updateStage from 'helpers/updateStage';
import { User } from 'contexts/AuthContext';
import { UpdateInput } from 'components/Profile/Profile';
import { DatabasePath } from 'types';
import { UpdatePasswordFormData } from 'components/Profile/UpdatePassword';

type OnComplete = (errorMsg?: string) => void;

class Firebase {
  public auth: app.auth.Auth;
  public database: app.database.Reference;
  public provider: app.auth.GoogleAuthProvider;

  constructor() {
    // check if app is already initialized
    if (app.apps.length === 0) {
      app.initializeApp(config.firebase);
    }

    this.auth = app.auth();
    this.database = app.database().ref();
    this.provider = new app.auth.GoogleAuthProvider();
  }

  getTimestamp = () => app.database.ServerValue.TIMESTAMP;

  getCurrentUser = () => app.auth().currentUser;

  createUser = (
    userDTO: {
      userId: User['uid'];
      email: User['uid'];
      firstName: User['firstName'];
      lastName: User['lastName'];
    },
    onComplete: OnComplete
  ) => {
    return this.database
      .child(
        `${DatabasePath.entries}/${userDTO.userId}/${DatabasePath.details}`
      )
      .set(
        {
          email: userDTO.email,
          firstName: userDTO.firstName,
          lastName: userDTO.lastName,
          timestamp: this.getTimestamp(),
        },
        async (error) => {
          if (error) {
            onComplete('Something went wrong creating user');
            return false;
          }
          onComplete();
          return true;
        }
      );
  };

  createUserWithEmailAndPassword = async (
    userDTO: CreateAccountFormData,
    onSuccess: () => void,
    onError: (msg: string) => void
  ) => {
    try {
      // create user with email and password
      const payload = await this.auth.createUserWithEmailAndPassword(
        userDTO.email,
        userDTO.password
      );
      if (payload.user?.uid) {
        // save on db additional info about the user
        this.createUser(
          {
            userId: payload.user.uid,
            email: userDTO.email,
            firstName: userDTO.firstName,
            lastName: userDTO.lastName,
          },
          async (msg) => {
            if (msg) {
              // If creation of additional info fails, delete already create auth
              await payload.user?.delete();
              return onError(msg);
            }
            onSuccess();
          }
        );
      }
    } catch (error) {
      if (error?.code === 'auth/email-already-in-use') {
        return onError(error?.message);
      }
      onError('Something went wrong, please try again!');
    }
  };

  signInWithGoogle = () => {
    this.auth.signInWithPopup(this.provider);
  };

  logInWithEmailAndPassword = ({ email, password }: LoginFormData) => {
    this.auth.signInWithEmailAndPassword(email, password);
  };

  logOut = () => {
    this.auth.signOut();
  };

  forgotPassword = (email: ForgotPasswordFormData['email']) => {
    this.auth.sendPasswordResetEmail(email);
  };

  updatePassword = async (
    credentials: UpdatePasswordFormData,
    onComplete: OnComplete
  ) => {
    const currentUser = this.getCurrentUser();
    if (!currentUser) return;

    const credential = app.auth.EmailAuthProvider.credential(
      currentUser.email!,
      credentials.currentPassword
    );

    try {
      await currentUser.reauthenticateWithCredential(credential);
      if (credentials.currentPassword === credentials.newPassword) {
        return onComplete(`You cannot use a password you've used in the past.`);
      }
      await currentUser.updatePassword(credentials.newPassword);
      onComplete();
    } catch (error) {
      if (error?.code.match('wrong-password')) {
        return onComplete('Incorrect password');
      }

      onComplete(
        'Something went wrong updating your password, please try again'
      );
    }
  };

  getUserDetails = (cb: (user: User | null) => void) => {
    const currentUser = this.getCurrentUser();
    if (!currentUser) {
      return cb(null);
    }

    return app
      .database()
      .ref(`${DatabasePath.entries}/${currentUser.uid}/${DatabasePath.details}`) // get additional auth info on user
      .on('value', (snapshot) => {
        const userInfo = {
          userId: currentUser.uid,
          photoURL: currentUser.photoURL || '',
          email: currentUser.email!,
          loginType: currentUser.providerData[0]?.providerId.includes(
            LoginTypes.google
          )
            ? LoginTypes.google
            : LoginTypes.emailPassword,
        };

        // if additional auth info does not exit, create user info
        if (!snapshot.val()) {
          const names = currentUser.displayName?.split(' ');

          this.createUser(
            {
              ...userInfo,
              firstName: names && names.length > 0 ? names[0] : '',
              lastName: names && names.length > 1 ? names[1] : '',
            },
            async (error) => {
              if (error) {
                // if creation fails delete auth user
                await currentUser.delete();
                return false;
              }
            }
          );
        }

        cb({
          ...userInfo,
          ...snapshot.val(),
        });
      });
  };

  updateUserDetails = (
    { name, value }: UpdateInput,
    onComplete: OnComplete
  ) => {
    const currentUser = this.getCurrentUser();
    if (!currentUser) return;

    this.database
      .child(
        `${DatabasePath.entries}/${currentUser.uid}/${DatabasePath.details}`
      )
      .update({ [name]: value }, (error: any) => {
        if (error) {
          return onComplete('Something went wrong updating you profile');
        }
        onComplete();
      });
  };

  saveNewApplication = (
    application: ApplicationFormData,
    onComplete: OnComplete
  ) => {
    const currentUser = this.getCurrentUser();
    if (!currentUser) return;

    return this.database
      .child(
        `${DatabasePath.entries}/${currentUser.uid}/${DatabasePath.applications}`
      )
      .push(
        {
          ...application,
          hired: false,
          interview: false,
          offer: false,
          concluded: false,
          timestamp: this.getTimestamp(),
        },
        (error: any) => {
          if (error) {
            return onComplete(
              error?.message || 'Something went wrong, please try again!'
            );
          }
          onComplete();
        }
      );
  };

  getApplications = (onComplete: (result: GetCount) => void) => {
    const currentUser = this.getCurrentUser();
    if (!currentUser) return;

    return this.database
      .child(
        `${DatabasePath.entries}/${currentUser.uid}/${DatabasePath.applications}`
      )
      .on('value', (snapshot) => {
        if (snapshot.val()) {
          const objectArr = Object.entries<Application>(
            snapshot.val()
          ).reverse();
          const data = getCount(objectArr);
          return onComplete(data);
        }
      });
  };

  editApplications = (update: Application, onComplete: OnComplete) => {
    const currentUser = this.getCurrentUser();
    if (!currentUser) return;

    const newUpdate = Object.entries(update).reduce((acc, [key, value]) => {
      if (key !== 'id') {
        acc[`${update.id}/${key}`] = value;
      }
      return acc;
    }, {} as { [key: string]: any });

    this.database
      .child(
        `${DatabasePath.entries}/${currentUser.uid}/${DatabasePath.applications}`
      )
      .update(
        {
          ...newUpdate,
          [`${update.id}/updatedTimestamp`]: this.getTimestamp(),
        },
        (error: any) => {
          if (error) {
            return onComplete('Something went wrong updating application');
          }
          onComplete();
        }
      );
  };

  deleteApplication = (id: string, onComplete: OnComplete) => {
    const currentUser = this.getCurrentUser();
    if (!currentUser) return;

    this.database
      .child(
        `${DatabasePath.entries}/${currentUser.uid}/${DatabasePath.applications}`
      )
      .child(id)
      .remove((error) => {
        if (error) {
          return onComplete('Something went wrong deleting application');
        }
        onComplete();
      });
  };

  setCurrentStage = (id: string, value: StageValue, onComplete: OnComplete) => {
    const currentUser = this.getCurrentUser();
    if (!currentUser) return;

    const newUpdate = updateStage(value);

    const data = Object.entries(newUpdate).reduce((acc, [key, value]) => {
      acc[`${id}/${key}`] = value;
      return acc;
    }, {} as { [key: string]: boolean });

    this.database
      .child(
        `${DatabasePath.entries}/${currentUser.uid}/${DatabasePath.applications}`
      )
      .update(data, (error) => {
        if (error) {
          return onComplete('Something went wrong deleting application');
        }
        onComplete();
      });
  };

  setDailyGoal = (value: number, onComplete: OnComplete) => {
    const currentUser = this.getCurrentUser();
    if (!currentUser) return;

    this.database
      .child(
        `${DatabasePath.entries}/${currentUser.uid}/${DatabasePath.details}`
      )
      .update({ dailyGoal: value ? value : null }, (error) => {
        if (error) {
          return onComplete('Something went wrong setting goal.');
        }
        onComplete();
      });
  };

  sendFeedback = (feedback: string, onComplete: OnComplete) => {
    const currentUser = this.getCurrentUser();
    if (!currentUser) return;

    return this.database
      .child(`${DatabasePath.feedbacks}/${currentUser.uid}`)
      .push(feedback, (error: any) => {
        if (error) {
          return onComplete(
            error?.message || 'Error sending feedback, please try again!'
          );
        }
        onComplete();
      });
  };
}

export default Firebase;
