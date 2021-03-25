import showAddClassesForm from '../components/classes/showAddClassesForm';

const addClass = () => {
  const classInfo = {
    name: document.querySelector('#name').value,
  };
  console.warn(classInfo);
};

const classEvents = (eventId) => {
  const action = eventId.split('--')[1];
  switch (action) {
    case 'add':
      showAddClassesForm();
      break;
    case 'add-submit':
      addClass();
      break;
    default:
      console.error(`The event ${action} is not accounted for`);
  }
};

export default classEvents;
