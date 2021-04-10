import domBuilder from '../components/domBuilder';
import { addDomEvents } from '../events/domEvents';
import home from './homePage';

const startApp = (userInfo) => {
  domBuilder(userInfo);
  addDomEvents(userInfo);
  home();
};

export default startApp;
