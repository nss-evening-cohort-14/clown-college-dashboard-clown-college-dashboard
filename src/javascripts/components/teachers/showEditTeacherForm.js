import formModal from '../formModal';
import teacherForm from './teacherForm';

import { getSingleTeachers } from '../../helpers/teacherHelper';

const showEditTeacherForm = (firebaseKey) => {
  formModal('Edit Teacher');
  getSingleTeachers(firebaseKey).then((teacherInfo) => {
    document.querySelector('#modal-body').innerHTML = teacherForm(teacherInfo);
  });
};

export default showEditTeacherForm;
