import showAllLessons from '../components/lessons/showAllLessons';

const starterHTML = `
<h2>All Clown Lessons</h2>
<div id="lessons--view"></div>
`;

const lessonView = () => {
  document.querySelector('#app-body').innerHTML = starterHTML;
  showAllLessons();
};

export default lessonView;
