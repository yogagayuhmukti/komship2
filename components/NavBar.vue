<template>
  <div>
    <b-navbar
      toggleable="lg"
      class="navbar navbar navbar-expand-xl navbar-light fixed-top navbar-light navbar-expand-xl"
      data-v-a8e75f0e=""
    >
      <b-navbar-brand class="navbar-brand" href="/"
        ><a
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
          /> </a
      ></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item active href="#">Beranda</b-nav-item>
          <b-nav-item href="#">Layanan</b-nav-item>
          <b-nav-item href="#">Atur Pengiriman</b-nav-item>
          <b-nav-item href="#">Fitur</b-nav-item>
          <b-nav-item href="#">Cek Ongkir</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <ul data-v-a8e75f0e="" class="navbar-nav">
            <button
              data-v-a8e75f0e=""
              type="button"
              class="btn btn btn-outline-primary btn-sign-in btn-outline-primary"
            >
              Masuk
            </button>
          </ul>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style>
/* Your component-specific styles here */
</style>
