import showAllTeachers from '../components/teachers/showAllTeachers';

const starterHTML = `
<h2>All Clown Teachers</h2>
<div id="teachers--view"></div>
`;

const teacherView = () => {
  document.querySelector('#app-body').innerHTML = starterHTML;
  showAllTeachers();
};

export default teacherView;
