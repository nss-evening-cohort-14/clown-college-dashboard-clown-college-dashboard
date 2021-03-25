import showAddTeacherForm from '../components/teachers/showAddTeacherForm';
import showAllTeachers from '../components/teachers/showAllTeachers';
import { createTeacher } from '../helpers/teacherHelper';

const addTeacher = () => {
  const newTeacherInfo = {
    fullName: document.querySelector('#fullName').value,
    imageUrl: document.querySelector('#imageUrl').value,
  };
  createTeacher(newTeacherInfo).then(showAllTeachers);

  $('#formModal').modal('toggle');
};

const teacherEvents = (eventId) => {
  const action = eventId.split('--')[1];
  switch (action) {
    case 'add':
      showAddTeacherForm();
      break;
    case 'add-submit':
      addTeacher();
      break;
    default:
      console.error(`The event ${action} is not accounted for`);
  }
};

export default teacherEvents;
