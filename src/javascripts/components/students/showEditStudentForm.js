import formModal from '../formModal';
import studentForm from './studentForm';

import { getSingleStudent } from '../../helpers/studentHelper';

const showEditStudentForm = (firebaseKey) => {
  formModal('Edit Student');
  getSingleStudent(firebaseKey).then((studentInfo) => {
    document.querySelector('#modal-body').innerHTML = studentForm(studentInfo);
  });
};

export default showEditStudentForm;
