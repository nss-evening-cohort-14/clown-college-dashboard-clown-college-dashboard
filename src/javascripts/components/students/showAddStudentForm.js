import formModal from '../formModal';
import studentForm from './studentForm';

const showAddStudentForm = () => {
  formModal('Add Student');
  document.querySelector('#modal-body').innerHTML = studentForm();
};

export default showAddStudentForm;
