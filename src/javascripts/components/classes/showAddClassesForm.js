import formModal from '../formModal';
import classForm from './classForm';

const showAddClassesForm = () => {
  formModal('Add Lesson');
  document.querySelector('#modal-body').innerHTML = classForm();
};

export default showAddClassesForm;
