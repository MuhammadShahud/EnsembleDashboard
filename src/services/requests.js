// https://ensemble-backendd.herokuapp.com/api
const requests = {
  REGISTER_URL: '/auth/signupCompany',
  AUTH_URL: '/auth/signinCompany',
  FORGET_PASSWORD_URL: '/auth/forgetPassCompany',
  VERIFY_CODE_URL: '/auth/forgetCode',
  CHANGE_PASSWORD_URL: '/auth/changePassCompany',
  SIGNUP_EMPLOYEE: '/auth/signup',

  COMPANY_INFO: '/company/',
  GET_COMPANY_INFO: '/company/',
  COMPANY_LOGO: '/company/profilePic/',

  DELETE_EMPLOYEE: '/user/',
  UPDATE_EMPLOYEE: '/user/',
  GET_EMPLOYEE: '/user/',

  DELETE_TEAM: '/team/',
  GET_TEAM_INFO: '/team/',
  CREATE_TEAM: '/team',
  UPDATE_TEAM: '/team/',

  GET_ALL_GOALS: '/goals/goalsByCompany?companyId=',
  GET_EMPLOYEE_GOALS: '/goals/getGoalsDashboard/?employeeId=',

  PICTURE_BASE_URL: 'https://ensemble-backendd.herokuapp.com/api/user/uploads/',

  GET_NOTI: '/noti',
  POST_NOTI: '/noti',

  GET_SURVEY_DATA: '/metrics',

  GET_FIXED_SURVEYS: '/fixedSurvey',
  GET_DASHBOARD_SURVEYS: '/metrics',
  POST_METRIC: '/metrics',

  GET_STATISTICS: 'company/statistics',

  GET_WEB_NOTI: '/webNoti',
};
export default requests;

const STATUSES = Object.freeze({
  IDLE: 'idle',
  LOADING: 'loading',
  ERROR: 'error',
  SUCCESS: 'success'
});

export { STATUSES };
