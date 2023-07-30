<template>
  <section class="app-shot-one" id="screenshots">
    <!-- <img src="/assets/images/background/app-shot-bg.png" alt="Awesome Image" class="app-shot-one__bg" /> -->
    <div class="container-fluid">
      <div class="block-title text-center">
        <h2 class="block-title__title"> <br> <span></span>实机演示</h2><!-- /.block-title__title -->
      </div><!-- /.block-title -->
      <div  >
        <div >
          <img  class="ppt"  src="/assets/images/app-shots/ppt.gif" alt="" style="height: 55%;width: 55%; ">
        </div><!-- /.item -->
       
      </div><!-- /.app-shot-one__carousel owl-theme owl-carousel -->
    </div><!-- /.container-fluid -->
  </section>
</template>

<script>
    export default {
      name: "Screenshots",
      mounted() {

          if ($('.app-shot-one__carousel').length) {
            $('.app-shot-one__carousel').owlCarousel({
              loop: true,
              margin: 43,
              nav: false,
              dots: false,
              autoWidth: false,
              autoplay: true,
              smartSpeed: 700,
              autoplayTimeout: 5000,
              autoplayHoverPause: true,
              slideBy: 5,
              responsive: {
                0: {
                  items: 1
                },
                480: {
                  items: 2
                },
                600: {
                  items: 3
                },
                991: {
                  items: 4
                },
                1000: {
                  items: 5
                },
                1200: {
                  items: 5
                }
              }
            });
          }
      }
    }
</script>

<style scoped>
  .ppt{
    display: block;
   margin: 0 auto;
  }
</style>
