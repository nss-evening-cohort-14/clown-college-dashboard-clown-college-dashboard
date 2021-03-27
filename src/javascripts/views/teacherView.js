import setUpView from '../components/setUpView';
import showAllTeachers from '../components/teachers/showAllTeachers';

const starterHTML = (userInfo) => `
<h2>All Clown Teachers</h2>
<div id="teachers--view">
${userInfo ? '<div> <button class="btn btn-success" id="teachers--add" data-toggle="modal" data-target="#formModal">Add Teacher</button></div>' : ''}
  <div id="teachers--list"></div>
</div>
`;

const teacherView = (userInfo) => {
  setUpView(starterHTML(userInfo));
  showAllTeachers(userInfo);
};

export default teacherView;
