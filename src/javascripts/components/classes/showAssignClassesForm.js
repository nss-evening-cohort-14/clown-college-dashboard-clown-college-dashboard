import formModal from '../formModal';
import classForm from './classForm';

const showAddClassesForm = () => {
  formModal('Assign Class');
  document.querySelector('#modal-body').innerHTML = classForm();
};

export default showAddClassesForm;
