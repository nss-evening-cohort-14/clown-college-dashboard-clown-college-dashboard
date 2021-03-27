import showAddClassesForm from '../components/classes/showAddClassesForm';
import showAllClasses from '../components/classes/showAllClasses';
import showEditClassForm from '../components/classes/showEditClassForm';
import { deleteClass, updateClass } from '../helpers/classHelper';

const handleUpdateClass = (firebaseKey) => {
  const classInfo = {
    name: document.querySelector('#name').value,
  };
  updateClass(firebaseKey, classInfo).then(showAllClasses);
  $('#formModal').modal('toggle');
};

// const handleDeleteClass = (firebaseKey) => {
//   deleteClass(firebaseKey).then(showAllClasses);
// };

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
      handleUpdateClass(firebaseKey);
      break;
    default:
      console.error(`The event ${action} is not accounted for`);
  }
};

export default classEvents;
