<template>
  <section class="content_info">
    <div class="content_info_top">
      <div class="content_info_top_img">
        <img src="~/assets/img/top-slider3.jpg" alt="img-info-top">
      </div>
      <div class="content_info_top_text">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-6 col-sm-7">
              <div class="">
                <p>Наша компания занимается изготовлением производственного термопереводного оборудования и
                  термопереводной пленки на заказ, а также производим станки горячего тиснения фольгой ,
                  автоматизированные сборочные станки для различных видов изделий.</p>
                <p>Мы являемся эксклюзивным поставщиком для таких крупных корейских компаний, как «Самсунг» и «LG»,
                  которые используют наше оборудование для нанесения рисунков, логотипов, надписей на бытовую технику и
                  мобильные телофоны.</p>
                <p>Кроме этого, мы уже 10 лет работаем с американской компанией «CPSREC», поставляем оборудование и
                  термопереводную пленку на рынок Соединенных Штатов. Мы имеем официальных дилеров в России, Турции,
                  Индии, а также клиентов в Китае, Малайзии и других странах.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content_info_bottom">
      <div class="container">
        <div class="row text-center align-items-center justify-content-md-center">
          <div class="col-md-3">
            <div class="content_info_bottom_text">
              <h3>Более</h3>
              <animated-number :value="value" :formatValue="formatToPrice" :duration="5000"/>
              <p>разновидностей станков с различным назначением</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="content_info_bottom_text">
              <img src="~/assets/img/logo2.png" alt="logo">
            </div>
          </div>
          <div class="col-md-3">
            <div class="content_info_bottom_text">
              <h3>Более</h3>
              <animated-number :value="valueSecond" :formatValue="formatToPrice" :duration="5000"/>
              <p>летний опыт в производстве термопереводного оборудования</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    import AnimatedNumber from "animated-number-vue";
    export default {
        name: "ContentInfo",
        components: {
            AnimatedNumber
        },
        data() {
            return {
                value: 60,
                valueSecond: 20,
            };
        },
        methods: {
            formatToPrice(value) {
                return `${value.toFixed(0)}`;
            },
        }
    }
</script>

<style scoped>

</style>
