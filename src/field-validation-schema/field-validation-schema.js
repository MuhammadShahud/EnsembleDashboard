import * as yup from 'yup';
export const registerSchema = yup.object().shape({
  email: yup.string().required('This field is required').email('Use a valid email format'),
  password: yup
    .string()
    .required('This field is required')
    .min(4, 'Use minimum 4 characters')
    .max(15, 'Use maximum 15 characters'),
  confirmPassword: yup
    .string()
    .required('This field is required')
    .oneOf([yup.ref('password'), null], 'Passwords must match')
});
export const passwordSchema = yup.object().shape({
  password: yup
    .string()
    .required('This field is required')
    .min(4, 'Use minimum 4 characters')
    .max(15, 'Use maximum 15 characters'),
  confirmPassword: yup
    .string()
    .required('This field is required')
    .oneOf([yup.ref('password'), null], 'Passwords must match')
});
export const emailSchema = yup.object().shape({
  email: yup.string().required('This field is required').email('Use a valid email format')
});
export const loginSchema = yup.object().shape({
  email: yup.string().required('This field is required').email('Use a valid email format'),
  password: yup.string().required('This field is required')
});
export const personalInfoSchema = yup.object().shape({
  name: yup.string().required('This field is required'),
  designation: yup.string().required('This field is required')
});
export const companyInfoSchema = yup.object().shape({
  companyName: yup.string().required('This field is required'),
  companySize: yup.string().required('This field is required')
});
export const signUpEmployeeSchema = yup.object().shape({
  firstName: yup.string().required('This field is required'),
  lastName: yup.string().required('This field is required'),
  email: yup.string().required('This field is required').email('Use a valid email format'),
  // teamId: yup.string(),
  jobTitle: yup.string().required('This field is required')
});
