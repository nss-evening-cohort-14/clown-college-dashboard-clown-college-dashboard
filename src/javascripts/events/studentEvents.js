import showAddStudentForm from '../components/students/showAddStudentForm';
import showAllStudents from '../components/students/showAllStudents';
import { createStudent } from '../helpers/studentHelper';

const addStudent = () => {
  const newStudentInfo = {
    fullName: document.querySelector('#fullName').value,
    imageUrl: document.querySelector('#imageUrl').value,
  };
  createStudent(newStudentInfo).then(() => showAllStudents());
  $('#formModal').modal('toggle');
};

const studentEvents = (eventId) => {
  const action = eventId.split('--')[1];
  switch (action) {
    case 'add':
      showAddStudentForm();
      break;
    case 'add-submit':
      addStudent();
      break;
    default:
      console.error(`The event ${action} is not accounted for`);
  }
};

export default studentEvents;
