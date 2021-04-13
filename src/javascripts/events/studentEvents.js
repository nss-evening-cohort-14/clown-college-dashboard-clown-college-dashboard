import showAddStudentForm from '../components/students/showAddStudentForm';
import showAllStudents from '../components/students/showAllStudents';
import {
  createStudent, deleteStudent, getSingleStudent, updateStudent,
} from '../helpers/studentHelper';
import showEditStudentForm from '../components/students/showEditStudentForm';

const handleCreateStudent = () => {
  const newStudentInfo = {
    fullName: document.querySelector('#fullName').value,
    imageUrl: document.querySelector('#imageUrl').value,
  };
  createStudent(newStudentInfo).then(showAllStudents);
  $('#formModal').modal('toggle');
};

const handleUpdateStudent = (firebaseKey) => {
  const newStudentInfo = {
    fullName: document.querySelector('#fullName').value,
    imageUrl: document.querySelector('#imageUrl').value,
  };
  updateStudent(firebaseKey, newStudentInfo).then(showAllStudents);
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
    case 'edit':
      showEditStudentForm(firebaseKey);
      break;
    case 'edit-submit':
      handleUpdateStudent(firebaseKey);
      break;
    default:
      console.error(`The event ${action} is not accounted for`);
  }
};

export default studentEvents;
