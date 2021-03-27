import showAddClassesForm from '../components/classes/showAddClassesForm';
import showAllClasses from '../components/classes/showAllClasses';
import showEditClassForm from '../components/classes/showEditClassForm';
import { updateClass } from '../helpers/classHelper';

const editClass = (firebaseKey) => {
  const classInfo = {
    name: document.querySelector('#name').value,
  };
  updateClass(firebaseKey, classInfo).then(showAllClasses);
  $('#formModal').modal('toggle');
};

const classEvents = (eventId) => {
  const [, action, firebaseKey] = eventId.split('--');
  switch (action) {
    case 'add':
      showAddClassesForm();
      break;
    case 'edit':
      showEditClassForm(firebaseKey);
      break;
    case 'edit-submit':
      editClass(firebaseKey);
      break;
    default:
      console.error(`The event ${action} is not accounted for`);
  }
};

export default classEvents;
