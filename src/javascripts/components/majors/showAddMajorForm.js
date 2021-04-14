import formModal from '../formModal';
import majorForm from './majorForm';

const showAddMajorForm = () => {
  formModal('Add Major');
  document.querySelector('#modal-body').innerHTML = majorForm();
};

export default showAddMajorForm;
