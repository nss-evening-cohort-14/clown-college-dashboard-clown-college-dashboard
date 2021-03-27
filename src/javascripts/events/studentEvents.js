import showAddStudentForm from '../components/students/showAddStudentForm';
import showAllStudents from '../components/students/showAllStudents';
import { createStudent, deleteStudent, getSingleStudent } from '../helpers/studentHelper';

const handleCreateStudent = () => {
  const newStudentInfo = {
    fullName: document.querySelector('#fullName').value,
    imageUrl: document.querySelector('#imageUrl').value,
  };
  createStudent(newStudentInfo).then(() => showAllStudents());
  $('#formModal').modal('toggle');
};

const handleDeleteStudent = (firebaseKey) => {
  getSingleStudent(firebaseKey).then((studentInfo) => {
    // eslint-disable-next-line no-alert
    const isConfirmed = window.confirm(`Do you want to delete the student "${studentInfo.fullName}"?`);
    if (isConfirmed) deleteStudent(firebaseKey).then(showAllStudents);
  });
};

const studentEvents = (eventId) => {
  const [, action, firebaseKey] = eventId.split('--');
  switch (action) {
    case 'delete':
      handleDeleteStudent(firebaseKey);
      break;
    case 'add':
      showAddStudentForm();
      break;
    case 'add-submit':
      handleCreateStudent();
      break;
    default:
      console.error(`The event ${action} is not accounted for`);
  }
};

export default studentEvents;
