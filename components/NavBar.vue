<template>
  <nav
    class="navbar navbar navbar-expand-xl navbar-light fixed-top navbar-light navbar-expand-xl"
    data-v-a8e75f0e=""
  >
    <b-navbar toggleable="lg">
      <b-navbar-brand class="container-fluid" data-v-a8e75f0e="">
        <a
          href="/"
          aria-current="page"
          class="navbar-brand nuxt-link-exact-active nuxt-link-active"
          data-v-a8e75f0e=""
        >
          <img
            src="~/assets/new-logo.svg"
            alt="logo komship"
            class="image-navbar"
            data-v-a8e75f0e=""
          />
        </a>
        <button
          type="button"
          aria-label="Toggle navigation"
          class="navbar-toggler collapsed"
          data-v-a8e75f0e=""
          aria-expanded="false"
          aria-controls="navbar-toggle-collapse"
          style="overflow-anchor: none"
        ></button>
        <div
          data-v-a8e75f0e=""
          id="navbar-toggle-collapse"
          class="collapse navbar-collapse nav-menu navbar-collapse collapse"
          style="display: none"
        ></div>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item active href="#">Beranda</b-nav-item>
          <b-nav-item href="#">Layanan</b-nav-item>
          <b-nav-item href="#">Atur Pengiriman</b-nav-item>
          <b-nav-item href="#">Fitur</b-nav-item>
          <b-nav-item href="#">Cek Ongkir</b-nav-item>
        </b-navbar-nav>

        <ul data-v-a8e75f0e="" class="navbar-nav">
          <button
            data-v-a8e75f0e=""
            type="button"
            class="btn btn btn-outline-primary btn-sign-in btn-outline-primary"
          >
            Masuk
          </button>
        </ul>
      </b-collapse>
    </b-navbar>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>
