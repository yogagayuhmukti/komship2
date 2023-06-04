<template>
  <section id="feature" class="feature">
    <div id="accordion-feature" class="container accordion mt-4">
      <h3
        data-aos="fade-up"
        data-aos-duration="1500"
        class="fitur aos-init"
        style="font-size: 32px; font-weight: 700; text-align: -webkit-left"
      >
        Fitur
      </h3>
      <div class="d-flex mb-5">
        <button
          id="div1"
          type="button"
          class="btn-feature m-2 actived"
          style="display: block"
        >
          Fitur Unggulan
        </button>
        <button
          id="div2"
          type="button"
          class="btn-feature m-2"
          style="display: block"
        >
          Fitur Tambahan
        </button>
      </div>
      <div id="div3" style="display: block">
        <div class="row">
          <div class="col-xl-5 col-lg-5 col-md-5">
            <div>
              <button id="arrow-btn" class="acc-feature d-flex mb-3">
                <div class="subhead-feature">Input Order Masal</div>
                <div class="arrow-feature mx-4"></div>
              </button>
              <p>
                Anti ribet untuk kamu yang harus input orderan cukup
                banyaksetiap hari, Gak perlu lagi input data manual satu
                persatu.
              </p>
            </div>
            <div>
              <button id="arrow-btn" class="acc-feature d-flex mb-3">
                <div class="subhead-feature">Tarik Data Otomatis dan Mudah</div>
                <div class="arrow-feature mx-4"></div>
              </button>
              <p>
                Data di dashboard akan semakin mudah kamu olah dengan
                memanfaatkan menu download. Kamu tinggal pilih klasifikasi data
                yang dibutuhkan.
              </p>
            </div>
            <div>
              <button id="arrow-btn" class="acc-feature d-flex mb-3">
                <div class="subhead-feature">Pantau Kendala Pengiriman</div>
                <div class="arrow-feature mx-4"></div>
              </button>
              <p>
                Kendala pengiriman akan makin mudah dan cepat teratasi karena
                terhubung langsung dengan ekspedisi terkait.
              </p>
            </div>
          </div>
          <div class="col-xl-7 col-lg-7 col-md-7 image-unggulan">
            <div
              id="order"
              class="image-feature-unggulan"
              style="display: block"
            >
              <img src="/_nuxt/img/bg-ordermasal.a94ed88.png" />
            </div>
            <div
              id="dataoto"
              class="image-feature-unggulan"
              style="display: none"
            >
              <img src="/_nuxt/img/bg-dataorder.0c2a4af.png" />
            </div>
            <div
              id="kendala"
              class="image-feature-unggulan"
              style="display: none"
            >
              <img src="/_nuxt/img/bg-kendala.2e87fd8.png" />
            </div>
          </div>
        </div>
      </div>

      <div id="div4" style="display: none">
        <div class="col-lg-6 col-12">
          <div
            data-aos="zoom-in-right"
            data-aos-duration="1500"
            class="d-flex aos-init aos-animate"
          >
            <img
              src="/_nuxt/img/produk-terlaris.cabbdcc.svg"
              style="width: 30%"
            />
            <div class="content">
              <span class="title">Produk Terlaris</span>
              <br />
              <span class="description"
                >Jika kamu memiliki produk dengan variasi yang berbeda, maka
                fitur produk terlaris ini dapat membantu kamu mengetahui produk
                mana yang menjadi best seller dalam kurun waktu 1 bulan atau 7
                hari terakhir.
              </span>
            </div>
          </div>
          <div
            data-aos="zoom-in-right"
            data-aos-duration="1500"
            class="d-flex aos-init aos-animate"
          >
            <img
              src="/_nuxt/img/customer-loyal.65f57b8.svg"
              style="width: 30%"
            />
            <div class="content">
              <span class="title">Customer Loyal</span>
              <br />
              <span class="description"
                >Merupakan data Customer yang sering melakukan order kembali
                (repeat order). Dengan mengetahui Customer Loyal kita, maka
                proses orderan akan semakin cepat.
              </span>
            </div>
          </div>
          <div
            data-aos="zoom-in-right"
            data-aos-duration="1500"
            class="d-flex aos-init aos-animate"
          >
            <img src="/_nuxt/img/top-admin.c666b76.svg" style="width: 30%" />
            <div class="content">
              <span class="title">Top Admin Order</span>
              <br />
              <span class="description"
                >Fitur yang akan mempermudah para pebisnis memantau
                produktifitas para admin dengan melihat data akumulasi performa
                masing-masing admin yang ada. Makin mudah juga untuk mengambil
                keputusan seperti pemberian bonus dan meningkatkan semangat
                kerja para admin.
              </span>
            </div>
          </div>
        </div>
        <img
          data-aos="zoom-in"
          data-aos-duration="1500"
          src="/_nuxt/img/bg-newfeature.02a172d.png"
          class="image-feature aos-init aos-animate"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Feature',
}
</script>
