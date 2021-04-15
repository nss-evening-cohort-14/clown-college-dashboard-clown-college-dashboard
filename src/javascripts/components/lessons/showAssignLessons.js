import formModal from '../formModal';
import lessonForm from './lessonForm';

const showAssignLessons = () => {
  formModal('Assign Lesson');
  document.querySelector('#modal-body').innerHTML = lessonForm();
};

export default showAssignLessons;
