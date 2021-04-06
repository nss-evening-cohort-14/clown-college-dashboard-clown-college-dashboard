const setUpView = (starterHTML) => {
  document.querySelector('#app-body').innerHTML = starterHTML;
  document.querySelector('#form-container').innerHTML = '';
};

export default setUpView;
