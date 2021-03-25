import formModal from '../formModal';
import teacherForm from './teacherForm';

const showAddTeacherForm = () => {
  formModal('Add Teacher');
  document.querySelector('#modal-body').innerHTML = teacherForm();
};

export default showAddTeacherForm;
