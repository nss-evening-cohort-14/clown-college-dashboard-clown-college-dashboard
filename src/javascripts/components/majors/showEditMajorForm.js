import formModal from '../formModal';
import majorForm from './majorForm';

import { getSingleMajor } from '../../helpers/majorHelper';

const showEditMajorForm = (firebaseKey) => {
  formModal('Edit Major');
  getSingleMajor(firebaseKey).then((majorInfo) => {
    document.querySelector('#modal-body').innerHTML = majorForm(majorInfo);
  });
};

export default showEditMajorForm;
