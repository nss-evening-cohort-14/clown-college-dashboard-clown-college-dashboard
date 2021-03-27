import showAddMajorForm from '../components/majors/showAddMajorForm';
import showAllMajors from '../components/majors/showAllMajors';
import { createMajor } from '../helpers/majorHelper';

const addMajor = () => {
  const majorInfo = {
    name: document.querySelector('#name').value,
  };
  createMajor(majorInfo).then(showAllMajors);
  $('#formModal').modal('toggle');
};

const majorEvents = (eventId) => {
  const action = eventId.split('--')[1];
  switch (action) {
    case 'add':
      showAddMajorForm();
      break;
    case 'add-submit':
      addMajor();
      break;
    default:
      console.error(`The event ${action} is not accounted for`);
  }
};

export default majorEvents;
