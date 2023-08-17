import '../styles/main.scss';
import htmlStructure from '../utils/htmlStructure';
import header from '../components/header';
import startSortingBtn from '../components/buttons/startSortingBtn';
import events from '../events/eventListeners';

const startApp = () => {
  htmlStructure(); // always load first
  header();
  startSortingBtn();
  events(); // always load last
};

startApp();
