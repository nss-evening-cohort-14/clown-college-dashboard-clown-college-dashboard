import showAllClasses from '../components/classes/showAllClasses';
import setUpView from '../components/setUpView';

const starterHTML = (userInfo) => `
<h2>All Clown Classes</h2>
<div id="classes--view">
${userInfo ? '<div style="background-color: rgb(141, 44, 44)"> <button class="btn btn-success m-2" id="classes--add" data-toggle="modal" data-target="#formModal">Add Class</button></div>' : ''}
  <div id="classes--list"></div>
</div>
`;

const classView = (userInfo) => {
  setUpView(starterHTML(userInfo));
  showAllClasses(userInfo);
};

export default classView;
