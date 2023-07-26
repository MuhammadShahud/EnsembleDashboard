import {
  AdminPanelPage,
  AnnouncementPage,
  ChooseTheColorPage,
  CompanyInformationPage,
  EmployeeDetailsPage,
  EmployeeTeamsPage,
  Error404Page,
  GoalsPage,
  Home,
  LoginPage,
  NewPasswordPage,
  PasswordRecoveryPage,
  PersonalInformationPage,
  PreviewTheAppPage,
  ResetPasswordPage,
  SettingsPage,
  SignUpPage,
  SurveyDashboard,
  SurveyKeyMetrics,
  SurveyMetricQuestions,
  SurveyPreviewLast,
  SurveyPreviewMetric,
  SurveyResult
} from './pages';

export const routes = [
  {
    name: 'Home',
    key: 'Home',
    route: '/',
    component: Home
  },
  {
    name: 'Home',
    key: 'Home',
    route: '/home',
    component: Home
  },
  {
    name: 'Login',
    key: 'LoginPage',
    route: '/login',
    component: Home
  },
  {
    name: 'NewPasswordPage',
    key: 'NewPasswordPage',
    route: '/set-new-password',
    component: Home
  },
  {
    name: 'PasswordRecoveryPage',
    key: 'PasswordRecoveryPage',
    route: '/password-recovery',
    component: Home
  },
  {
    name: 'PersonalInformationPage',
    key: 'PersonalInformationPage',
    route: '/personal-information',
    component: PersonalInformationPage
  },
  {
    name: 'ResetPasswordPage',
    key: 'ResetPasswordPage',
    route: '/reset-password',
    component: Home
  },
  {
    name: 'SignUpPage',
    key: 'SignUpPage',
    route: '/sign-up',
    component: Home
  },
  {
    name: 'Error404Page',
    key: 'Error404Page',
    route: '/*',
    component: Error404Page
  },
  {
    name: 'AnnouncementPage',
    key: 'AnnouncementPage',
    route: '/AnnouncementPage',
    component: AnnouncementPage
  },
  {
    name: 'AdminPanelPage',
    key: 'AdminPanelPage',
    route: '/admin-profile',
    component: AdminPanelPage
  },
  {
    name: 'SettingsPage',
    key: 'SettingsPage',
    route: '/settings',
    component: SettingsPage
  },
  {
    name: 'CompanyInformationPage',
    key: 'CompanyInformationPage',
    route: '/company-information',
    component: CompanyInformationPage
  },
  {
    name: 'ChooseTheColorPage',
    key: 'ChooseTheColorPage',
    route: '/choose-color',
    component: ChooseTheColorPage
  },
  {
    name: 'PreviewTheAppPage',
    key: 'PreviewTheAppPage',
    route: '/preview-app',
    component: PreviewTheAppPage
  },
  {
    name: 'EmployeeTeamsPage',
    key: 'EmployeeTeamsPage',
    route: '/employee-teams',
    component: EmployeeTeamsPage
  },
  {
    name: 'SurveyDashboard',
    key: 'SurveyDashboard',
    route: '/survey-dashboard',
    component: SurveyDashboard
  },
  {
    name: 'SurveyResult',
    key: 'SurveyResult',
    route: '/survey-result',
    component: SurveyResult
  },
  {
    name: 'SurveyPreviewMetric',
    key: 'SurveyPreviewMetric',
    route: '/survey-preview-metric',
    component: SurveyPreviewMetric
  },
  {
    name: 'SurveyPreviewLast',
    key: 'SurveyPreviewLast',
    route: '/survey-preview-last',
    component: SurveyPreviewLast
  },
  {
    name: 'SurveyKeyMetrics',
    key: 'SurveyKeyMetrics',
    route: '/survey-key-metrics',
    component: SurveyKeyMetrics
  },
  {
    name: 'SurveyMetricQuestions',
    key: 'SurveyMetricQuestions',
    route: '/survey-metric-questions',
    component: SurveyMetricQuestions
  },
  {
    name: 'EmployeeDetailsPage',
    key: 'EmployeeDetailsPage',
    route: '/employee-details',
    component: EmployeeDetailsPage
  },
  {
    name: 'GoalsPage',
    key: 'GoalsPage',
    route: '/goals',
    component: GoalsPage
  }
];
export const unAuthRoutes = [
  {
    name: 'Login',
    key: 'LoginPage',
    route: '/',
    component: LoginPage
  },
  {
    name: 'Login',
    key: 'LoginPage',
    route: '/*',
    component: LoginPage
  },
  {
    name: 'NewPasswordPage',
    key: 'NewPasswordPage',
    route: '/set-new-password',
    component: NewPasswordPage
  },
  {
    name: 'PasswordRecoveryPage',
    key: 'PasswordRecoveryPage',
    route: '/password-recovery',
    component: PasswordRecoveryPage
  },
  {
    name: 'ResetPasswordPage',
    key: 'ResetPasswordPage',
    route: '/reset-password',
    component: ResetPasswordPage
  },
  {
    name: 'SignUpPage',
    key: 'SignUpPage',
    route: '/sign-up',
    component: SignUpPage
  }
];
