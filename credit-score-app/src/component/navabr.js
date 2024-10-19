const NavBar =() => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    {/* <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> */}
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link to= './first-time' class="nav-link active" aria-current="page" href="#">First Time User</Link>
        </li>
        <li class="nav-item">
          <Link to= './current' class="nav-link" href="#">Current User</Link>
        </li>
        <li class="nav-item">
          <Link to= './logInOpt' class="nav-link" href="#">Log in/Sign up</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}
export default NavBar