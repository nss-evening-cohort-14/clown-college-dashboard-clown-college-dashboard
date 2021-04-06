import formModal from '../formModal';
import lessonForm from './lessonForm';

const showAddLessonForm = () => {
  formModal('Add Lesson');
  document.querySelector('#modal-body').innerHTML = lessonForm();
};

export default showAddLessonForm;
