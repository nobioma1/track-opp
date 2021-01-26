import React, { useState } from 'react';
import firebase from 'firebase/app';

import { useFirebaseContext } from 'hooks';

export interface User {
  uid: string;
  firstName: string;
  lastName: string;
  email: string;
  photoURL: string;
  dailyGoal?: number;
  timestamp: number;
}

interface AuthContextValue {
  user: User | null;
  isLoading: boolean;
  userAuthChanged: () => firebase.Unsubscribe;
  setUser(user: User | null): void;
}

const AuthContext = React.createContext<AuthContextValue>(null!);

export const AuthContextProvider: React.FC = ({ children }) => {
  const { auth, getUserDetails } = useFirebaseContext();
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  const userAuthChanged = () => {
    return auth.onAuthStateChanged(async () => {
      getUserDetails((user) => {
        setUser(user);
        setIsLoading(false);
      });
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        userAuthChanged,
        setUser: (user: User | null) => setUser(user),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
