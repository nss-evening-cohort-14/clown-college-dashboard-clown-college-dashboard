import showAllMajors from '../components/majors/showAllMajors';
import setUpView from '../components/setUpView';

const starterHTML = (userInfo) => `
<h2>All Clown Majors</h2>
<div id="majors--view">
${userInfo ? '<div style="background-color: rgb(141, 44, 44)"> <button class="btn btn-secondary m-2" id="majors--add" data-toggle="modal" data-target="#formModal">Add A Major</button></div>' : ''}
  <div id="majors--list"></div>
</div>
`;

const majorView = (userInfo) => {
  setUpView(starterHTML(userInfo));
  showAllMajors(userInfo);
};

export default majorView;
