import showAddMajorForm from '../components/majors/showAddMajorForm';
import showAllMajors from '../components/majors/showAllMajors';
import { createMajor, updateMajor } from '../helpers/majorHelper';
import showEditMajorForm from '../components/majors/showEditMajorForm';

const addMajor = () => {
  const majorInfo = {
    name: document.querySelector('#name').value,
  };
  createMajor(majorInfo).then(showAllMajors);
  $('#formModal').modal('toggle');
};

const editMajor = (firebaseKey) => {
  const majorInfo = {
    name: document.querySelector('#name').value,
  };
  updateMajor(firebaseKey, majorInfo).then(showAllMajors);
  $('#formModal').modal('toggle');
};

const majorEvents = (eventId) => {
  const [, action, firebaseKey] = eventId.split('--');
  switch (action) {
    case 'add':
      showAddMajorForm();
      break;
    case 'add-submit':
      addMajor();
      break;
    case 'edit':
      showEditMajorForm(firebaseKey);
      break;
    case 'edit-submit':
      editMajor(firebaseKey);
      break;
    default:
      console.error(`The event ${action} is not accounted for`);
  }
};

export default majorEvents;
