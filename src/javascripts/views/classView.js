import showAllClasses from '../components/classes/showAllClasses';
import setUpView from '../components/setUpView';

const starterHTML = (userInfo) => `
<h2>All Clown Classes</h2>
<div id="classes--view">
${userInfo ? '<div> <button class="btn btn-success" id="classes--add" data-toggle="modal" data-target="#formModal">Add Class</button></div>' : ''}
  <div id="classes--list"></div>
</div>
`;

const classView = (userInfo) => {
  setUpView(starterHTML(userInfo));
  showAllClasses();
};

export default classView;
