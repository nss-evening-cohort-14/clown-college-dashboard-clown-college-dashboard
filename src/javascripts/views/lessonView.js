import showAllLessons from '../components/lessons/showAllLessons';
import setUpView from '../components/setUpView';

const starterHTML = (userInfo) => `
<h2>All Clown Lessons</h2>

  <div id="lessons--view">
  <span class="container d-flex col" style="background-color: rgb(141, 44, 44)">
  ${userInfo ? '<div> <button class="btn btn-success m-2" id="lessons--add" data-toggle="modal" data-target="#formModal">Add Lessons</button></div>' : ''}
  ${userInfo ? '<div> <button class="btn btn-secondary m-2" id="lesson--assign" data-toggle="modal" data-target="#formModal">Assign Lessons</button></div>' : ''}
  </span>
    <div id="lessons--list"></div>
  </div>

`;

const lessonView = (userInfo) => {
  setUpView(starterHTML(userInfo));
  showAllLessons(userInfo);
};

export default lessonView;
