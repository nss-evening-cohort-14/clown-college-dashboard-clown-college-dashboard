import formModal from '../formModal';
import lessonForm from './lessonForm';

import { getSingleLesson } from '../../helpers/lessonHelper';

const showEditLessonForm = (firebaseKey) => {
  formModal('Edit Lesson');
  getSingleLesson(firebaseKey).then((lessonInfo) => {
    document.querySelector('#modal-body').innerHTML = lessonForm(lessonInfo);
  });
};

export default showEditLessonForm;
