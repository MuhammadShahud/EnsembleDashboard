import { useSelector } from 'react-redux';
import Happiness from '../assets/icons/happiness-vector.svg';
import Stats from '../assets/icons/stats.svg';
import Thumb from '../assets/icons/thumb.svg';
import Relation from '../assets/icons/relation-with-peers.svg';
import Blood from '../assets/icons/blood.svg';
import Exchange from '../assets/icons/exchange.svg';
import Trophy from '../assets/icons/trophy.svg';
import Alignment from '../assets/icons/alignment.svg';
import Flag from '../assets/icons/flag.svg';
import { useMediaQuery, useTheme } from '@mui/material';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const getIdFromLocalStorage = () => {
  let id = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo') || '{}').id
    : null;
  return id;
};

export const getAuthToken = () => {
  let authToken = localStorage.getItem('authToken') ? localStorage.getItem('authToken') : null;
  return authToken;
};

export const getTeamData = (employeeTeamId) => {
  const { teams } = useSelector((state) => state.company);
  return teams.filter((team) => {
    return team.id === employeeTeamId;
  });
};

export const stringToColor = (string) => {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string?.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
};

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const getIconFromMetrics = (metrics) => {

  let metricLowerText = metrics?.toLowerCase();
  switch (metricLowerText) {
    case 'happiness':
      return Happiness;
    case 'recognition':
      return Trophy;
    case 'personal growth':
      return Stats;
    case 'ambassadorship':
      return Flag;
    case 'alignment':
      return Alignment;
    case 'wellness':
      return Blood;
    case 'feedback':
      return Exchange;
    case 'satisfaction':
      return Thumb;
    default:
      return Happiness;
  }
};

export const withoutNavbarKeys = [
  'SignUpPage',
  'LoginPage',
  'PasswordRecoveryPage',
  'NewPasswordPage',
  'ResetPasswordPage',
  'PersonalInformationPage',
  'CompanyInformationPage',
  'ChooseTheColorPage',
  'PreviewTheAppPage'
];

export const dynamicTeamNameColWidth = () => {
  const { teams } = useSelector((state) => state.company);
  if (teams.length === 0) {
    return 0;
  }
  const theme = useTheme();
  const tablet = useMediaQuery(theme.breakpoints.up('tB'));
  let root = tablet ? 16 : 10;
  let lengths = teams.map((team) => {
    return Number(team.teamName.length);
  });
  let sorted = lengths.sort(function (a, b) {
    return b - a;
  });
  let returnWidth = sorted[0] * root + 0.875 * root;

  return returnWidth < 350 ? returnWidth : 350;
};
export const maxTeamNameChar = () => {
  const { teams } = useSelector((state) => state.company);
  if (teams.length === 0) {
    return 0;
  }
  let lengths = teams.map((team) => {
    return Number(team.teamName.length);
  });
  let sorted = lengths.sort(function (a, b) {
    return b - a;
  });
  return sorted[0] - 2;
};

export const dynamicEmployeeNameColWidth = () => {
  const { employees } = useSelector((state) => state.company);
  if (employees.length === 0) {
    return 0;
  }
  const theme = useTheme();
  const tablet = useMediaQuery(theme.breakpoints.up('tB'));
  const xl = useMediaQuery(theme.breakpoints.up('xl'));
  let root = xl ? 14 : tablet ? 13 : 10;
  let lengths = employees.map((employee) => {
    return employee.name.length;
  });
  let sorted = lengths.sort(function (a, b) {
    return b - a;
  });

  let returnWidth = sorted[0] * root;

  return returnWidth < 350 ? returnWidth : 350;
};
export const handleExportPdf = (gridRef) => {
  console.log('fun called');
  console.log(gridRef)
  html2canvas(gridRef.current).then((canvas) => {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF();
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth() - 20;
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(imgData, 'PNG', 10, 10, pdfWidth, pdfHeight);
    pdf.save('grid.pdf');
  });
};
