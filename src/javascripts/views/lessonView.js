import showAllLessons from '../components/lessons/showAllLessons';
import setUpView from '../components/setUpView';

const starterHTML = (userInfo) => `
<h2>All Clown Lessons</h2>
<div id="lessons--view">
${userInfo ? '<div> <button class="btn btn-success" id="lessons--add" data-toggle="modal" data-target="#formModal">Add Lessons</button></div>' : ''}
  <div id="lessons--list"></div>
</div>
`;

const lessonView = (userInfo) => {
  setUpView(starterHTML(userInfo));
  showAllLessons();
};

export default lessonView;
