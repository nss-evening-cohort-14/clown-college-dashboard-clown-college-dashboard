import showAddTeacherForm from '../components/teachers/showAddTeacherForm';
import showAllTeachers from '../components/teachers/showAllTeachers';
import showEditTeacherForm from '../components/teachers/showEditTeacherForm';
import { createTeacher, updateTeacher } from '../helpers/teacherHelper';

const handleCreateTeacher = () => {
  const newTeacherInfo = {
    fullName: document.querySelector('#fullName').value,
    imageUrl: document.querySelector('#imageUrl').value,
  };
  createTeacher(newTeacherInfo).then(showAllTeachers);
  $('#formModal').modal('toggle');
};

const handleUpdateTeacher = (firebaseKey) => {
  const newTeacherInfo = {
    fullName: document.querySelector('#fullName').value,
    imageUrl: document.querySelector('#imageUrl').value,
  };
  updateTeacher(firebaseKey, newTeacherInfo).then(showAllTeachers);
  $('#formModal').modal('toggle');
};

const teacherEvents = (eventId) => {
  const [, action, firebaseKey] = eventId.split('--');
  switch (action) {
    case 'add':
      showAddTeacherForm();
      break;
    case 'add-submit':
      handleCreateTeacher();
      break;
    case 'edit':
      showEditTeacherForm(firebaseKey);
      break;
    case 'edit-submit':
      handleUpdateTeacher(firebaseKey);
      break;
    default:
      console.error(`The event ${action} is not accounted for`);
  }
};

export default teacherEvents;
