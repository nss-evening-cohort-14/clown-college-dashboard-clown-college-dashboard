import showAddLessonForm from '../components/lessons/showAddLessonForm';
import showAllLessons from '../components/lessons/showAllLessons';
import showEditLessonForm from '../components/lessons/showEditLessonForm';
import { createLesson, updateLesson } from '../helpers/lessonHelper';

const addLesson = () => {
  const lessonInfo = {
    name: document.querySelector('#name').value,
  };
  createLesson(lessonInfo).then(showAllLessons);
  $('#formModal').modal('toggle');
};

const editLesson = (firebaseKey) => {
  const lessonInfo = {
    name: document.querySelector('#name').value,
  };
  updateLesson(firebaseKey, lessonInfo).then(showAllLessons);
  $('#formModal').modal('toggle');
};

const lessonEvents = (eventId) => {
  const [, action, firebaseKey] = eventId.split('--');
  switch (action) {
    case 'add':
      showAddLessonForm();
      break;
    case 'add-submit':
      addLesson();
      break;
    case 'edit':
      showEditLessonForm(firebaseKey);
      break;
    case 'edit-submit':
      editLesson(firebaseKey);
      break;
    default:
      console.error(`The event ${action} is not accounted for`);
  }
};

export default lessonEvents;
