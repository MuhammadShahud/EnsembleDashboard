import { createSlice } from '@reduxjs/toolkit';
import { getCompanyInfoById } from '../../services/company';
import { STATUSES } from '../../services/requests';

// const response = {
//   data: {
//     email: 'testing@ptg.net',
//     password: '$2b$10$jgb7xC7TteoAcsOMqYNx2uwYWGhIeRdmZ3cxW/jHdHl3pOzLlIO.O',
//     firstTime: false,
//     teamId: [
//       {
//         teamName: 'Design Team',
//         companyId: '63cd735ca32e2b89929f654d',
//         teamLead: '63cd8148a32e2b89929f655a',
//         teamColor: '#5050AD',
//         employeeId: [
//           '63cd8148a32e2b89929f655a',
//           '63cd8185a32e2b89929f6561',
//           '63cd81b6a32e2b89929f656a'
//         ],
//         createdAt: '2023-01-22T18:43:38.135Z',
//         updatedAt: '2023-01-22T18:43:38.135Z',
//         id: '63cd83daa32e2b89929f659a'
//       }
//     ],
//     employeeId: [
//       {
//         name: 'Taha Ahmed',
//         email: 'taha@ptg.net',
//         password: '$2b$10$TZ0B7Bga/DaqcZ1FQRKzRuSwTkUps.iF7012ESAi6nc0j8hE41pbe',
//         companyId: '63cd735ca32e2b89929f654d',
//         teamId: '',
//         firstTime: true,
//         jobTitle: 'Software Engineer',
//         completedSurveys: [],
//         id: '63cd8148a32e2b89929f655a'
//       },
//       {
//         name: 'Mahnoor Asif',
//         email: 'mahnoor@ptg.net',
//         password: '$2b$10$pAfne/NN5H1ejeKF20Ac0uk4.VM04G4oqGEtzcZ/TQhecguRwdE0y',
//         companyId: '63cd735ca32e2b89929f654d',
//         teamId: '',
//         firstTime: true,
//         jobTitle: 'Software Engineer l2',
//         completedSurveys: [],
//         id: '63cd8185a32e2b89929f6561'
//       },
//       {
//         name: 'Maha Hashmi',
//         email: 'maha@ptg.net',
//         password: '$2b$10$iCFJ59IhoES8dtMYHPBGfeBHotgAfzCvYvRuZWNAwhPuVOo9NLTgS',
//         companyId: '63cd735ca32e2b89929f654d',
//         teamId: '',
//         firstTime: true,
//         jobTitle: 'Software Engineer l1',
//         completedSurveys: [],
//         id: '63cd81b6a32e2b89929f656a'
//       },
//       {
//         name: 'Annie Shabir',
//         email: 'annie@ptg.net',
//         password: '$2b$10$wwmCu0yG0ERvLxmnSHXYAOddvMGW9CSmWf2UIiQCPdgv/IeD7D7Gm',
//         companyId: '63cd735ca32e2b89929f654d',
//         teamId: '',
//         firstTime: true,
//         jobTitle: 'Business Analyst',
//         completedSurveys: [],
//         id: '63cd81d5a32e2b89929f6573'
//       },
//       {
//         name: 'Taleya Dastagir',
//         email: 'taleya@ptg.net',
//         password: '$2b$10$ci.rjbWXEV1vVCBs6Ji6x.D96URZNaVoLjIT.FTqehlU00xQwKUYi',
//         companyId: '63cd735ca32e2b89929f654d',
//         teamId: '',
//         firstTime: true,
//         jobTitle: 'Front End Developer',
//         completedSurveys: [],
//         id: '63cd81faa32e2b89929f657c'
//       },
//       {
//         name: 'Raja Massood',
//         email: 'masood@ptg.net',
//         password: '$2b$10$cKc5TwPObojSeji8XUcz8OSHOCM1kP/7xeOmnPuRj0wylQmlsrXNa',
//         companyId: '63cd735ca32e2b89929f654d',
//         teamId: '',
//         firstTime: true,
//         jobTitle: 'Front End Developer',
//         completedSurveys: [],
//         id: '63cd8212a32e2b89929f6585'
//       },
//       {
//         name: 'Mashhood Siddique',
//         email: 'mashhood@ptg.net',
//         password: '$2b$10$pUpTJqaC4EF42vDAOv7gRelconpulAZTd8QAjafE7RB0/jJUqzo..',
//         companyId: '63cd735ca32e2b89929f654d',
//         teamId: '',
//         firstTime: true,
//         jobTitle: 'Front End Developer',
//         completedSurveys: [],
//         id: '63cd83bfa32e2b89929f6590'
//       }
//     ],
//     surveyId: [],
//     createdAt: '2023-01-22T17:33:16.907Z',
//     updatedAt: '2023-01-22T18:43:38.500Z',
//     profilePic: 'uploads/a.jpeg',
//     aboutCompany: '',
//     brandColor: '#5050AF',
//     companyName: 'Plum Tree Group t',
//     designation: 'Manager',
//     name: 'Madiha Chohan',
//     organizationType: '',
//     sizeOfCompany: 50,
//     id: '63cd735ca32e2b89929f654d'
//   }
// };

const companySlice = createSlice({
  name: 'company',
  initialState: {
    employees: [],
    teams: [],
    surveys: [],
    company: {},
    status: STATUSES.IDLE,
    currentEmployee: {},
    apiCall: true
  },
  reducers: {
    setStatus(state, action) {
      state.status = action.payload;
    },
    setApiCall(state, action) {
      state.apiCall = action.payload;
    },
    setCompany(state, action) {
      state.company = action.payload;
    },
    setEmployees(state, action) {
      state.employees = action.payload;
    },
    setSurveys(state, action) {
      state.surveys = action.payload;
    },
    setTeams(state, action) {
      state.teams = action.payload;
    },
    setCurrentEmployee(state, action) {
      state.currentEmployee = action.payload;
    }
  }
});

export const {
  setStatus,
  setApiCall,
  setCompany,
  setEmployees,
  setTeams,
  setCurrentEmployee,
  setSurveys
} = companySlice.actions;
export default companySlice.reducer;

export function getCompanyInfo() {
  return async function authenticateUserThunk(dispatch, getState) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const response = await getCompanyInfoById(getState().auth.userInfo.id);
      let entries = Object.entries(response.data);
      let company = entries.filter((entery) => {
        return !['teamId', 'surveyId', 'employeeId'].includes(entery[0]);
      });
      let companyObject = Object.fromEntries(company);
      dispatch(setCompany(companyObject));
      dispatch(setEmployees(response.data.employeeId));
      dispatch(setTeams(response.data.teamId));
      dispatch(setSurveys(response.data.surveyId));
      dispatch(setStatus(STATUSES.SUCCESS));
      // setTimeout(() => {
      // }, 3000);
    } catch (err) {
      console.log(err);
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
