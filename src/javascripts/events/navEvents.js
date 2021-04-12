import signIn from '../helpers/signIn';
import signOut from '../helpers/signOut';
import homeView from '../views/homeView';
import studentView from '../views/studentView';
import teacherView from '../views/teacherView';
import lessonView from '../views/lessonView';
import classView from '../views/classView';
import majorView from '../views/majorView';

const navEvents = (eventId, userInfo) => {
  const action = eventId.split('--')[1];
  switch (action) {
    case 'logout':
      signOut();
      break;
    case 'signIn':
      signIn();
      break;
    case 'home':
      homeView(userInfo);
      break;
    case 'students':
      studentView(userInfo);
      break;
    case 'teachers':
      teacherView(userInfo);
      break;
    case 'lessons':
      lessonView(userInfo);
      break;
    case 'classes':
      classView(userInfo);
      break;
    case 'majors':
      majorView(userInfo);
      break;
    default:
      console.error(`The event ${action} is not accounted for`);
  }
};

export default navEvents;
