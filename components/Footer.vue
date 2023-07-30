<template>
  <div>
    <footer class="site-footer" id="footer">
      <div class="site-footer__upper">
        <div class="container">
          <div class="row">
            <div class="col-lg-3">
              <div class="footer-widget footer-widget__about">
                  <h3 class="footer-widget__title">桌面端有声小说制作工具</h3><!-- /.footer-widget__title -->
                <!-- <img src="/assets/images/resources/logo-dark (2).jpg" width="119" alt="" class="footer-widget__logo"> -->
                <!-- /.footer-widget__contact -->
                <p class="footer-widget__contact"><a href="mailto:needhelp@example.com"></a></p>
                <p class="footer-widget__contact">通过这个工具，用户无需专业的音频制作技能，便可以创作出高质量的有声小说作品。无论是个人爱好者还是专业创作者，都可以通过本工具实现自己的创作梦想，将想象力和故事情节通过声音的传达，打造独特的有声作品

                   <br> </p><!-- /.footer-widget__contact -->
              </div>
              <!-- /.footer-widget -->
            </div>
            <!-- /.col-lg-2 -->
            <div class="col-lg-6 d-flex justify-content-between footer-widget__links-wrap">
              <div class="footer-widget col-lg-6">
                <h3 class="footer-widget__title">开源技术</h3><!-- /.footer-widget__title -->
                <ul class="footer-widget__links list-unstyled">
                      <li> <a href="https://www.electronjs.org/zh/docs/latest/" target="_blank"><span data-hover="electron">electron</span></a></li>
                       <li> <a href="https://cn.vuejs.org/" target="_blank"><span data-hover="Vue">Vue</span></a> </li>
                      <li> <a href="https://nuxt.com/" target="_blank"><span data-hover="nuxt">nuxt</span></a> </li>
                      <li> <a href="https://spring.io/" target="_blank"><span data-hover="spring全家桶">spring全家桶
                                            </span></a> </li>
                </ul><!-- /.footer-widget__links -->
              </div><!-- /.footer-widget -->
              <div class="footer-widget col-lg-6">
                <h3 class="footer-widget__title">网站导航</h3><!-- /.footer-widget__title -->
                <ul class="footer-widget__links list-unstyled">
                                <li> <a href="" target="_blank"><span data-hover="主页">网站主页</span></a> </li>
                                <li> <a href="" target="_blank"><span data-hover="工具特色">工具特色</span></a></li>
                                <li> <a href="" target="_blank"><span data-hover="实机演示">实机演示</span></a> </li>
                                <li> <a href="" target="_blank"><span data-hover="关于我们">关于我们</span></a> </li>

                </ul><!-- /.footer-widget__links -->
              </div><!-- /.footer-widget -->

              <div class="footer-widget col-lg-6">
                <h3 class="footer-widget__title">合法</h3><!-- /.footer-widget__title -->
                <ul class="footer-widget__links list-unstyled">

                                <li> <a href="" target="_blank"><span data-hover>服务条款</span></a></li>
                                <li> <a href="" target="_blank"><span data-hover>隐私政策</span></a></li>
                </ul><!-- /.footer-widget__links -->
              </div><!-- /.footer-widget -->
            </div>
            <!-- /.col-lg-6 -->
          </div><!-- /.row -->
        </div><!-- /.container -->
      </div>
      <!-- /.site-footer__upper -->
      <div class="site-footer__bottom">
        <div class="container">
          <div class="inner-container text-center">
            <p class="site-footer__copy">&copy; copyright 2023 by <a href="https://space.bilibili.com/436571192">有声小说制作工具</a> All Right Reserved.</p>
            <!-- /.site-footer__copy -->
          </div><!-- /.inner-container -->
        </div><!-- /.container -->
      </div><!-- /.site-footer__bottom -->
    </footer>

      <a href="#" data-target="html" class="scroll-to-target scroll-to-top"><i class="fa fa-angle-up"></i></a>

  </div>
</template>

<script>
    export default {
      name: "Footer",
      mounted() {

        $(window).on('scroll', function () {
          if ($('.scroll-to-top').length) {
            var strickyScrollPos = 100;
            if ($(window).scrollTop() > strickyScrollPos) {
              $('.scroll-to-top').fadeIn(500);
            } else if ($(this).scrollTop() <= strickyScrollPos) {
              $('.scroll-to-top').fadeOut(500);
            }
          }
        })
      }
    }
</script>

<style scoped>

</style>
