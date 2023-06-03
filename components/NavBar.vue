<template>
  <div>
    <b-navbar toggleable="lg">
      <b-navbar-brand href="#">
        <img src="~/assets/new-logo.svg" />
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

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-button variant="outline-primary">Masuk</b-button>
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
