import universityLogo from '../../styles/assets/universityLogo.jpeg';

const navbar = (userInfo) => {
  const navbarHTML = `
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" id="navbar--home" href="#"><img src="${universityLogo}" id="about-image" style="width: 3em; margin-left: 1em"></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="#" id="navbar--students">Students</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" id="navbar--teachers">Teachers</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" id="navbar--lessons">Lessons</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" id="navbar--classes">Classes</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" id="navbar--majors">Majors</a>
      </li>
    </ul>
    <div><button class="btn btn-danger" id="navbar--${userInfo ? 'logout--btn' : 'signIn--btn'}">${userInfo ? 'Logout' : 'Sign In'}</button></div>
  </div>
</nav>
  `;

  document.querySelector('#navbar-container').innerHTML = navbarHTML;
};

export default navbar;
