<template>
  <div id="app">
    <!-- Top Bar Start -->
    <div class="top-bar">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="tb-contact">
              <p><i class="fas fa-envelope"></i>info@mail.com</p>
              <p><i class="fas fa-phone-alt"></i>+012 345 6789</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="tb-menu">
              <a href="">About</a>
              <a href="">Privacy</a>
              <a href="">Terms</a>
              <a href="">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Brand Start -->
    <div class="brand">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-3 col-md-4">
            <div class="b-logo">
              <a href=""
                >Logo
                <!---<img src="" alt="Logo"> --->
              </a>
            </div>
          </div>
          <div class="col-lg-6 col-md-4">
            <div class="b-ads">
              <a href=""
                >Ads
                <!---<img src="" alt="Ads"> --->
              </a>
            </div>
          </div>
          <div class="col-lg-3 col-md-4">
            <div class="b-search">
              <input type="text" placeholder="Search" />
              <button><i class="fa fa-search"></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Nav Bar Start -->
    <div class="nav-bar">
      <div class="container">
        <nav class="navbar navbar-expand-md bg-dark navbar-dark">
          <a href="#" class="navbar-brand">MENU</a>
          <button
            type="button"
            class="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class="collapse navbar-collapse justify-content-between"
            id="navbarCollapse"
          >
            <div class="navbar-nav mr-auto">
              <router-link to="/" class="nav-item nav-link active">Home</router-link>
              <router-link to="/profile" class="nav-item nav-link">my profile</router-link>
            </div>
            <div class="social ml-auto">
              <a href=""><i class="fab fa-twitter"></i></a>
              <a href=""><i class="fab fa-facebook-f"></i></a>
              <a href=""><i class="fab fa-linkedin-in"></i></a>
              <a href=""><i class="fab fa-instagram"></i></a>
              <a href=""><i class="fab fa-youtube"></i></a>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <!-- Nav Bar End -->
    <router-view/>
    <!-- Footer Start -->
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-6">
          <div class="footer-widget">
            <h3 class="title">Get in Touch</h3>
            <div class="contact-info">
              <p><i class="fa fa-map-marker"></i>123 News Street, NY, USA</p>
              <p><i class="fa fa-envelope"></i>info@example.com</p>
              <p><i class="fa fa-phone"></i>+123-456-7890</p>
              <div class="social">
                <a href=""><i class="fab fa-twitter"></i></a>
                <a href=""><i class="fab fa-facebook-f"></i></a>
                <a href=""><i class="fab fa-linkedin-in"></i></a>
                <a href=""><i class="fab fa-instagram"></i></a>
                <a href=""><i class="fab fa-youtube"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6">
          <div class="footer-widget">
            <h3 class="title">Useful Links</h3>
            <ul>
              <li><a href="#">Lorem ipsum</a></li>
              <li><a href="#">Pellentesque</a></li>
              <li><a href="#">Aenean vulputate</a></li>
              <li><a href="#">Vestibulum sit amet</a></li>
              <li><a href="#">Nam dignissim</a></li>
            </ul>
          </div>
        </div>

        <div class="col-lg-3 col-md-6">
          <div class="footer-widget">
            <h3 class="title">Quick Links</h3>
            <ul>
              <li><a href="#">Lorem ipsum</a></li>
              <li><a href="#">Pellentesque</a></li>
              <li><a href="#">Aenean vulputate</a></li>
              <li><a href="#">Vestibulum sit amet</a></li>
              <li><a href="#">Nam dignissim</a></li>
            </ul>
          </div>
        </div>

        <div class="col-lg-3 col-md-6">
          <div class="footer-widget">
            <h3 class="title">Newsletter</h3>
            <div class="newsletter">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vivamus sed porta dui. Class aptent taciti sociosqu
              </p>
              <form>
                <input class="form-control" type="email" placeholder="Your email here" />
                <button class="btn">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Footer End -->
  <!-- Footer Menu Start -->
  <div class="footer-menu">
    <div class="container">
      <div class="f-menu">
        <a href="">Terms of use</a>
        <a href="">Privacy policy</a>
        <a href="">Cookies</a>
        <a href="">Accessibility help</a>
        <a href="">Advertise with us</a>
        <a href="">Contact us</a>
      </div>
    </div>
  </div>
  <!-- Footer Menu End -->

  <!-- Footer Bottom Start -->
  <div class="footer-bottom">
    <div class="container">
      <div class="row">
        <div class="col-md-6 copyright">
          <p>
            Copyright &copy; <a href="https://htmlcodex.com">HTML Codex</a>.
            All Rights Reserved
          </p>
        </div>

        <div class="col-md-6 template-by">
          <p>Template By <a href="https://htmlcodex.com">HTML Codex</a></p>
        </div>
      </div>
    </div>
  </div>
  <!-- Footer Bottom End -->
  </div>
</template>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.box {
  width: 100%;
  height: 100vh;
  background-color: aqua;
}

$body-bg: #c1bdba;
$form-bg: #13232f;
$white: #ffffff;

$main: #1ab188;
$main-light: lighten($main, 5%);
$main-dark: darken($main, 5%);

$gray-light: #a0b3b0;
$gray: #ddd;

$thin: 300;
$normal: 400;
$bold: 600;
$br: 4px;

*,
*:before,
*:after {
  box-sizing: border-box;
}

html {
  overflow-y: scroll;
}

/*body {
  background: $body-bg;
}*/

a {
  text-decoration: none;
  color: $main;
  transition: 0.5s ease;
  &:hover {
    color: $main-dark;
  }
}

.form {
  background: rgba($form-bg, 0.9);
  padding: 40px;
  max-width: 600px;
  margin: 40px auto;
  border-radius: $br;
  box-shadow: 0 4px 10px 4px rgba($form-bg, 0.3);
}

.tab-group {
  list-style: none;
  padding: 0;
  margin: 0 0 40px 0;
  &:after {
    content: '';
    display: table;
    clear: both;
  }
  li a {
    display: block;
    text-decoration: none;
    padding: 15px;
    background: rgba($gray-light, 0.25);
    color: $gray-light;
    font-size: 20px;
    float: left;
    width: 50%;
    text-align: center;
    cursor: pointer;
    transition: 0.5s ease;
    &:hover {
      background: $main-dark;
      color: $white;
    }
  }
  .active a {
    background: $main;
    color: $white;
  }
}

.tab-content > div:last-child {
  display: none;
}

h1 {
  text-align: center;
  color: $white;
  font-weight: $thin;
  margin: 0 0 40px;
}

label {
  position: absolute;
  transform: translateY(6px);
  left: 13px;
  color: rgba($white, 0.5);
  transition: all 0.25s ease;
  -webkit-backface-visibility: hidden;
  pointer-events: none;
  font-size: 22px;
  .req {
    margin: 2px;
    color: $main;
  }
}

label.active {
  transform: translateY(50px);
  left: 2px;
  font-size: 14px;
  .req {
    opacity: 0;
  }
}

label.highlight {
  color: $white;
}

input,
textarea {
  font-size: 22px;
  display: block;
  width: 100%;
  height: 100%;
  padding: 5px 10px;
  background: none;
  background-image: none;
  border: 1px solid $gray-light;
  color: $white;
  border-radius: 0;
  transition: border-color 0.25s ease, box-shadow 0.25s ease;
  &:focus {
    outline: 0;
    border-color: $main;
  }
}

textarea {
  border: 2px solid $gray-light;
  resize: vertical;
}

.field-wrap {
  position: relative;
  margin-bottom: 40px;
}

.top-row {
  &:after {
    content: '';
    display: table;
    clear: both;
  }

  > div {
    float: left;
    width: 48%;
    margin-right: 4%;
    &:last-child {
      margin: 0;
    }
  }
}

.button {
  border: 0;
  outline: none;
  border-radius: 0;
  padding: 15px 0;
  font-size: 2rem;
  font-weight: $bold;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  background: $main;
  color: $white;
  transition: all.5s ease;
  -webkit-appearance: none;
  &:hover,
  &:focus {
    background: $main-dark;
  }
}

.button-block {
  display: block;
  width: 100%;
}

.forgot {
  margin-top: -20px;
  text-align: right;
}
</style>
