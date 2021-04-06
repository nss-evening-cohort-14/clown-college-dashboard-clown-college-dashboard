import classEvents from './classEvents';
import lessonEvents from './lessonEvents';
import majorEvents from './majorEvents';
import navEvents from './navEvents';
import studentEvents from './studentEvents';
import teacherEvents from './teacherEvents';

const handleDomEvents = (e, userInfo) => {
  e.preventDefault();
  if (e.target.id.startsWith('navbar--')) navEvents(e.target.id, userInfo);
  if (e.target.id.startsWith('students--')) studentEvents(e.target.id);
  if (e.target.id.startsWith('teachers--')) teacherEvents(e.target.id);
  if (e.target.id.startsWith('lessons--')) lessonEvents(e.target.id);
  if (e.target.id.startsWith('classes--')) classEvents(e.target.id);
  if (e.target.id.startsWith('majors--')) majorEvents(e.target.id);
};

const addDomEvents = (userInfo) => document.querySelector('body').addEventListener('click', (e) => handleDomEvents(e, userInfo));

export { handleDomEvents, addDomEvents };
