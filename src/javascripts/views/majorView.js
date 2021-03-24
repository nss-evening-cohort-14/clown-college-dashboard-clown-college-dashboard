import showAllMajors from '../components/majors/showAllMajors';

const starterHTML = `
<h2>All Clown Lessons</h2>
<div id="majors--view"></div>
`;

const majorView = () => {
  document.querySelector('#app-body').innerHTML = starterHTML;
  showAllMajors();
};

export default majorView;
