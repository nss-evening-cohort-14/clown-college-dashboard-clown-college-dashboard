import signIn from '../helpers/signIn';
import signOut from '../helpers/signOut';
import studentView from '../views/studentView';
import teacherView from '../views/teacherView';
import lessonView from '../views/lessonView';
import classView from '../views/classView';
import majorView from '../views/majorView';

const navEvents = (eventId) => {
  const action = eventId.split('--')[1];
  switch (action) {
    case 'logout':
      signOut();
      break;
    case 'signIn':
      signIn();
      break;
    case 'home':
      studentView();
      break;
    case 'students':
      studentView();
      break;
    case 'teachers':
      teacherView();
      break;
    case 'lessons':
      lessonView();
      break;
    case 'classes':
      classView();
      break;
    case 'majors':
      majorView();
      break;
    default:
      console.error(`The event ${action} is not accounted for`);
  }
};

export default navEvents;
