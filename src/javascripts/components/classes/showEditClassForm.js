import formModal from '../formModal';
import classForm from './classForm';

import { getSingleClass } from '../../helpers/classHelper';

const showEditClassForm = (firebaseKey) => {
  formModal('Edit Class');
  getSingleClass(firebaseKey).then((classInfo) => {
    document.querySelector('#modal-body').innerHTML = classForm(classInfo);
  });
};

export default showEditClassForm;
