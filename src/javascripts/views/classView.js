import showAllClasses from '../components/classes/showAllClasses';

const starterHTML = `
<h2>All Clown Classes</h2>
<div id="classes--view"></div>
`;

const classView = () => {
  document.querySelector('#app-body').innerHTML = starterHTML;
  showAllClasses();
};

export default classView;
