const homeView = () => {
  document.querySelector('#app-body').innerHTML = `
      <div class="container d-flex justify-content-center mb-3" style="margin-top: 5em; margin-left: 20em">
        <div class="container home-info-container" style="width: 50em">
          <h1>Studying carnivaling from a new angle.</h1>
          <p style="margin-top: 1.3em">Any successful carnival career starts with a big red nose and good education. Together with us you will have deeper knowledge of the clowning subjects that will be especially useful for you when climbing the carnival career ladder.</p>
        </div>
        <div class="container student-img">
          <img src="https://images.unsplash.com/photo-1516534775068-ba3e7458af70?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHN0dWRlbnR8ZW58MHwwfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"></div>
        </div>
      </div>
    </div>
  
    <div class="container info-tiles-container d-flex justify-content-center mt-5">
      
    <img class="card-img-top" src="https://cdn4.iconfinder.com/data/icons/elearning-online-education-1/512/mortarboard-512.png" alt="Card image cap" style="width: 4em; height: 4em; margin-top: 2em">
      <div class="card border-white" style="width: 14rem;">
        <div class="card-body">
          <h5 class="card-title">Best Industry Leaders</h5>
          <a href="#students" class="card-link" style="color: red">View More</a>
        </div>
      </div>

      <img class="card-img-top" src="https://cdn4.iconfinder.com/data/icons/internet-seccurity-line/32/Internet_Security_Alert_bell_notification_alarm_notice-128.png" alt="Card image cap" style="width: 4em; height: 4em; margin-top: 2em">
      <div class="card border-white" style="width: 14rem;">
        <div class="card-body">
          <h5 class="card-title">Learn Courses Online</h5>
          <a href="#classes" class="card-link" style="color: red">View More</a>
        </div>
      </div>

      <img class="card-img-top" src="https://cdn2.iconfinder.com/data/icons/education-378/96/Book-128.png" alt="Card image cap" style="width: 4em; height: 4em; margin-top: 2em">
      <div class="card border-white" style="width: 14rem;">
        <div class="card-body">
          <h5 class="card-title">Book Library & Store</h5>
          <a href="#majors" class="card-link" style="color: red">View More</a>
        </div>
      </div>

    </div>
 `;
};

export default homeView;
