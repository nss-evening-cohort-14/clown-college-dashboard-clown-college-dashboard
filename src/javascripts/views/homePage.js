const home = () => {
  document.querySelector('#app-body').innerHTML = `
  <div class="container d-flex justify-content-center flex-column" id="home-page">
    <div class="jumbotron" style="background-color: white"> 
      <h1>Some Junk Here</h1>
    </div>
  </div>`;
};

export default home;
