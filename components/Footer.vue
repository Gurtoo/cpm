<template>
  <div class="footer">
    <div class="container-fluid">
      <div class="row">
        <div class="col-4">
          <div class="footer_content">
            <p>Телефон: 82-31-988-8302~3</p>
            <p>Факс: 82-31-988-8327</p>
            <p>E-mail: cpmengkoa@mail.ru</p>
          </div>
        </div>
        <div class="col-4">
          <div class="footer_content_center">
            <p>CPM Engineering Co., Ltd. ALL RIGHTS RESERVED</p>
          </div>
        </div>
        <div class="col-4 justify-content-center align-items-end">
          <div class="footer_content_social">
            <nuxt-link to="/">
              <img src="~/assets/img/Facebook.png" alt="social">
            </nuxt-link>
            <nuxt-link to="/">
              <img src="~/assets/img/Twitter.png" alt="social">
            </nuxt-link>
            <nuxt-link to="/">
              <img src="~/assets/img/Intsagram.png" alt="social">
            </nuxt-link>
            <nuxt-link to="/">
              <img src="~/assets/img/YouTube.png" alt="social">
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>

</style>
