import showAddLessonForm from '../components/lessons/showAddLessonForm';
import showAllLessons from '../components/lessons/showAllLessons';
import showEditLessonForm from '../components/lessons/showEditLessonForm';
import {
  createLesson,
  deleteLesson,
  getSingleLesson,
  updateLesson
} from '../helpers/lessonHelper';

const handleCreateLesson = () => {
  const lessonInfo = {
    name: document.querySelector('#name').value,
  };
  createLesson(lessonInfo).then(showAllLessons);
  $('#formModal').modal('toggle');
};

const handleUpdateLesson = (firebaseKey) => {
  const lessonInfo = {
    name: document.querySelector('#name').value,
  };
  updateLesson(firebaseKey, lessonInfo).then(showAllLessons);
  $('#formModal').modal('toggle');
};

const handleDeleteLesson = (firebaseKey) => {
  getSingleLesson(firebaseKey).then((lessonInfo) => {
    // eslint-disable-next-line no-alert
    const isConfirmed = window.confirm(`Do you want to delete the "${lessonInfo.name}" class?`);
    if (isConfirmed) deleteLesson(firebaseKey).then(showAllLessons);
  });
};

const lessonEvents = (eventId) => {
  const [, action, firebaseKey] = eventId.split('--');
  switch (action) {
    case 'delete':
      handleDeleteLesson(firebaseKey);
      break;
    case 'add':
      showAddLessonForm();
      break;
    case 'add-submit':
      handleCreateLesson();
      break;
    case 'edit':
      showEditLessonForm(firebaseKey);
      break;
    case 'edit-submit':
      handleUpdateLesson(firebaseKey);
      break;
    default:
      console.error(`The event ${action} is not accounted for`);
  }
};

export default lessonEvents;
