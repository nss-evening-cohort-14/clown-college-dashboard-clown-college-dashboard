import showAddLessonForm from '../components/lessons/showAddLessonForm';
import showAllLessons from '../components/lessons/showAllLessons';
import { createLesson } from '../helpers/lessonHelper';

const addLesson = () => {
  const lessonInfo = {
    name: document.querySelector('#name').value,
  };
  createLesson(lessonInfo).then(showAllLessons);
  $('#formModal').modal('toggle');
};

const lessonEvents = (eventId) => {
  const action = eventId.split('--')[1];
  switch (action) {
    case 'add':
      showAddLessonForm();
      break;
    case 'add-submit':
      addLesson();
      break;
    default:
      console.error(`The event ${action} is not accounted for`);
  }
};

export default lessonEvents;
