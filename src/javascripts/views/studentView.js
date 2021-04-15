import setUpView from '../components/setUpView';
import showAllStudents from '../components/students/showAllStudents';

const starterHTML = (userInfo) => `
<h2>All Clown Students</h2>
<div id="students--view">
  ${userInfo ? '<div style="background-color: rgb(141, 44, 44)"> <button class="btn btn-success m-2" id="students--add" data-toggle="modal" data-target="#formModal">Add Student</button></div>' : ''}
  <div id="students--list"></div>
</div>
`;

const studentView = (userInfo) => {
  setUpView(starterHTML(userInfo));
  showAllStudents(userInfo);
};

export default studentView;
