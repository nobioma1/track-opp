import { AppRoutes } from '../consts';
import { IRoute } from './AppRoute';

import ForgotPassword from '../pages/authentication/ForgotPassword';
import LandingPage from '../pages/landing/LandingPage';
import LoginPage from '../pages/authentication/LoginPage';
import ResetPassword from '../pages/authentication/ResetPassword';
import SignupPage from '../pages/authentication/SignupPage';
import HomePage from '../pages/home/HomePage';

const appRoutes: IRoute[] = [
  {
    name: 'Landing',
    Component: LandingPage,
    path: AppRoutes.landing,
    exact: true,
  },
  { name: 'Home', Component: HomePage, path: AppRoutes.dashboard },
  { name: 'Login', Component: LoginPage, path: AppRoutes.login },
  { name: 'Signup', Component: SignupPage, path: AppRoutes.signup },
  {
    name: 'Forgot Password',
    Component: ForgotPassword,
    path: AppRoutes.forgotPassword,
  },
  {
    name: 'Reset Password',
    Component: ResetPassword,
    path: AppRoutes.resetPassword,
  },
];

export default appRoutes;
