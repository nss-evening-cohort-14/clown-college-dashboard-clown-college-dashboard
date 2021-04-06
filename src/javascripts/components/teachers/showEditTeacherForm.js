import formModal from '../formModal';
import teacherForm from './teacherForm';

import { getSingleTeacher } from '../../helpers/teacherHelper';

const showEditTeacherForm = (firebaseKey) => {
  formModal('Edit Teacher');
  getSingleTeacher(firebaseKey).then((teacherInfo) => {
    document.querySelector('#modal-body').innerHTML = teacherForm(teacherInfo);
  });
};

export default showEditTeacherForm;
