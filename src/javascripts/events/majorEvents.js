import showAddMajorForm from '../components/majors/showAddMajorForm';
import showAllMajors from '../components/majors/showAllMajors';
import { createMajor, deleteMajor, updateMajor } from '../helpers/majorHelper';
import showEditMajorForm from '../components/majors/showEditMajorForm';

const handleCreateMajor = () => {
  const majorInfo = {
    name: document.querySelector('#name').value,
  };
  createMajor(majorInfo).then(showAllMajors);
  $('#formModal').modal('toggle');
};

const handleUpdateMajor = (firebaseKey) => {
  const majorInfo = {
    name: document.querySelector('#name').value,
  };
  updateMajor(firebaseKey, majorInfo).then(showAllMajors);
  $('#formModal').modal('toggle');
};

const handleDeleteMajor = (firebaseKey) => {
  deleteMajor(firebaseKey).then(showAllMajors);
};

const majorEvents = (eventId) => {
  const [, action, firebaseKey] = eventId.split('--');
  switch (action) {
    case 'delete':
      handleDeleteMajor(firebaseKey);
      break;
    case 'add':
      showAddMajorForm();
      break;
    case 'add-submit':
      handleCreateMajor();
      break;
    case 'edit':
      showEditMajorForm(firebaseKey);
      break;
    case 'edit-submit':
      handleUpdateMajor(firebaseKey);
      break;
    default:
      console.error(`The event ${action} is not accounted for`);
  }
};

export default majorEvents;
