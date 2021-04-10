import domBuilder from '../components/domBuilder';
import { addDomEvents } from '../events/domEvents';
import homeView from './homeView';

const startApp = (userInfo) => {
  domBuilder(userInfo);
  addDomEvents(userInfo);
  homeView();
};

export default startApp;
