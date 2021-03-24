import showAllStudents from '../components/students/showAllStudents';

const starterHTML = `
<h2>All Clown Students</h2>
<div id="students--all"></div>
`;

const studentView = () => {
  document.querySelector('#app-body').innerHTML = starterHTML;
  showAllStudents();
};

export default studentView;
