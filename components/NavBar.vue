<template>
  <div
    class="navbar navbar navbar-expand-xl navbar-light fixed-top navbar-light navbar-expand-xl"
    data-v-a8e75f0e=""
  >
    <div class="container-fluid">
      <b-navbar-brand class="navbar-brand" href="/">
        <img
          href="/"
          aria-current="page"
          src="~/assets/new-logo.svg"
          alt="logo komship"
          class="image-navbar"
          data-v-a8e75f0e=""
      /></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" class="navbar-collapse" is-nav>
        <b-navbar-nav class="nav-group-item">
          <b-nav-item class="navbar-item" href="#home">Beranda</b-nav-item>
          <b-nav-item class="navbar-item" href="#service">Layanan</b-nav-item>
          <b-nav-item class="navbar-item" href="#alur"
            >Atur Pengiriman</b-nav-item
          >
          <b-nav-item class="navbar-item" href="#feature">Fitur</b-nav-item>
          <b-nav-item class="navbar-item" href="#">Cek Ongkir</b-nav-item>
          <b-nav-item data-v-a8e75f0e="" class="navbar-nav">
            <button
              data-v-a8e75f0e=""
              type="button"
              class="btn btn-sign-in btn-outline-primary"
            >
              Masuk
            </button>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style>
/* Your component-specific styles here */
.navbar[data-v-a8e75f0e] {
  background-color: #fff;
  max-height: 80px;
  font-family: Poppins, sans-serif;
}
.container-fluid {
  display: flex;
  flex-wrap: inherit;
  justify-content: space-between;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  padding: 0px, 24px;
}
.image-navbar[data-v-a8e75f0e] {
  margin-left: 4vw;
}

.navbar-brand {
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  margin-right: 1rem;
  font-size: 1.25rem;
  text-decoration: none;
  white-space: nowrap;
}
.navbar-collapse {
  background-color: #f95031;
  justify-content: end;
  position: relative;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}
.nav-group-item {
  justify-content: space-between;
  align-items: center;
  padding-left: 2.5vw;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}
.navbar-item {
  display: block;
  padding: 0.5rem 1.2rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out;
}
.nav-link {
  color: #fff !important;
}
/* .nav-link:active {
  color: #f95031;
} */
.btn-sign-in[data-v-a8e75f0e] {
  width: 151px;
  height: 56px;
  margin-left: 5vw;
  margin-right: 5vw;
  border: 1px solid;
  padding: 0.375rem 0.75rem;
  font-weight: 400;
  border-radius: 12px !important;
}
.btn-outline-primary {
  color: #f95031 !important;
  border-color: white !important;
  background-color: white;
}
.btn-outline-primary:hover {
  color: #f95031 !important;
  border-color: white !important;
  background-color: white;
}
.btn-outline-primary:active {
  color: white !important;
  border-color: #f95031 !important;
  background-color: #f95031 !important;
}
@media (min-width: 1200px) {
  .navbar[data-v-a8e75f0e] {
    background-color: #fff;
  }
  .navbar-expand-xl {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .navbar-expand-xl .navbar-collapse {
    background-color: #fff;
    display: flex !important;
    flex-basis: auto;
  }
  .navbar-item {
    color: white;
  }
  .nav-link {
    color: rgba(0, 0, 0, 0.55) !important;
  }
  .nav-link:active {
    color: #f95031 !important;
  }
  .btn-outline-primary {
    color: #f95031 !important;
    border-color: #f95031 !important;
  }
  .btn-outline-primary:hover {
    color: white !important;
    border-color: #f95031 !important;
    background-color: #f95031;
  }
  .btn-outline-primary:active {
    color: white !important;
    border-color: #f95031 !important;
    background-color: #f95031 !important;
  }
}
</style>
