import showAllMajors from '../components/majors/showAllMajors';
import setUpView from '../components/setUpView';

const starterHTML = () => `
<h2>All Clown Lessons</h2>
<div id="majors--view">
<div> <button class="btn btn-success" id="majors--add" data-toggle="modal" data-target="#formModal">Add Major</button></div>
  <div id="majors--list"></div>
</div>
`;

const majorView = (userInfo) => {
  setUpView(starterHTML(userInfo));
  showAllMajors();
};

export default majorView;
