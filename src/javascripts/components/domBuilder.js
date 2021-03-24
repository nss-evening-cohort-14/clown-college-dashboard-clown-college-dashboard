import navbar from './navbar';

const starterHTML = `
<div id="app-container">
  <div id="navbar-container"></div>
  <div id="app-body"></div>
</div>
`;

const domBuilder = (userInfo) => {
  document.querySelector('#app').innerHTML = starterHTML;
  navbar(userInfo);
};

export default domBuilder;
