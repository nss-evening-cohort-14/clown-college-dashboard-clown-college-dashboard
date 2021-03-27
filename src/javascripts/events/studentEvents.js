import showAddStudentForm from '../components/students/showAddStudentForm';
import showAllStudents from '../components/students/showAllStudents';
import { createStudent, deleteStudent } from '../helpers/studentHelper';

const handleCreateStudent = () => {
  const newStudentInfo = {
    fullName: document.querySelector('#fullName').value,
    imageUrl: document.querySelector('#imageUrl').value,
  };
  createStudent(newStudentInfo).then(() => showAllStudents());
  $('#formModal').modal('toggle');
};

const handleDeleteStudent = (firebaseKey) => {
  deleteStudent(firebaseKey).then(showAllStudents);
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
