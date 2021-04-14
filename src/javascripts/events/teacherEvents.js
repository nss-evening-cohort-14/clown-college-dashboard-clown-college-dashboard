import showAddTeacherForm from '../components/teachers/showAddTeacherForm';
import showAllTeachers from '../components/teachers/showAllTeachers';
import showEditTeacherForm from '../components/teachers/showEditTeacherForm';
import {
  createTeacher,
  deleteTeacher,
  getSingleTeacher,
  updateTeacher
} from '../helpers/teacherHelper';

const handleCreateTeacher = () => {
  const newTeacherInfo = {
    teacher_name: document.querySelector('#fullName').value,
    teacher_image: document.querySelector('#imageUrl').value,
  };
  createTeacher(newTeacherInfo).then(showAllTeachers);
  $('#formModal').modal('toggle');
};

const handleUpdateTeacher = (firebaseKey) => {
  const newTeacherInfo = {
    teacher_name: document.querySelector('#fullName').value,
    teacher_image: document.querySelector('#imageUrl').value,
  };
  updateTeacher(firebaseKey, newTeacherInfo).then(showAllTeachers);
  $('#formModal').modal('toggle');
};

const handleDeleteTeacher = (firebaseKey) => {
  getSingleTeacher(firebaseKey).then((teacherInfo) => {
    // eslint-disable-next-line no-alert
    const isTeacherConfirmed = window.confirm(`Do you want to delete the "${teacherInfo.teacher_name}" teacher?`);
    if (isTeacherConfirmed) deleteTeacher(firebaseKey).then(showAllTeachers);
  });
};

const teacherEvents = (eventId) => {
  const [, action, firebaseKey] = eventId.split('--');
  switch (action) {
    case 'delete':
      handleDeleteTeacher(firebaseKey);
      break;
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
