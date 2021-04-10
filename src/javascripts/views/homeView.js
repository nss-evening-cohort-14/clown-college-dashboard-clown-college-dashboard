const homeView = () => {
  document.querySelector('#app-body').innerHTML = `
  <div class="container d-flex col justify-content-center" style="margin-top: 10em; margin-left: 20em">
  <h1>Studying carnivaling from a new angle.</h1>
  <div class="container"><img src="https://images.unsplash.com/photo-1516534775068-ba3e7458af70?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHN0dWRlbnR8ZW58MHwwfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="student doing homework"></div>
  </div>

 `;
};

export default homeView;
