import domBuilder from '../components/domBuilder';
import { addDomEvents } from '../events/domEvents';
import studentView from './studentView';

const startApp = (userInfo) => {
  domBuilder(userInfo);
  addDomEvents(userInfo);
  studentView(userInfo);
};

export default startApp;
