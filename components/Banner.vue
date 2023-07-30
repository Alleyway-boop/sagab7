<template>
  <section class="banner-two" id="banner">
    <span class="banner-two__shape-1"></span>
    <span class="banner-two__shape-2"></span>
    <span class="banner-two__shape-3"></span>
    <span class="banner-two__shape-4"></span>
    <div class="banner-two__moc">
      <img src="/assets/images/mocs/banner-moc-1-1.jpg"
        style="height: 50%;width: 50%;border-radius: 50px;margin-left: 50%;margin-bottom: 10%;" alt="Awesome Image" />
    </div><!-- /.banner-two__moc -->
    <div class="container">
      <div class="row">
        <div class="col-xl-6 col-lg-8">
          <div class="banner-one__content">
            <h3 class="banner-one__title">桌面端 <br> <span>有声小说制作工具</span></h3><!-- /.banner-one__title -->
            <p class="banner-one__text">桌面端有声小说制作工具，旨在提供一个便捷的平台，使用户能够自行制作、编辑和发布有声小说作品。</p>
            <!-- /.banner-one__text -->

          </div>

          <div class="thm-btn " @click="winWinload()">
            <span>Windows下载</span>

          </div>
          <div class="thm-btn " @click="linuxWinload()">

            <span>Linux下载</span>
          </div>
          <!-- </div> -->
          <!-- /.thm-btn -->

          <!-- /.banner-one__content -->
        </div><!-- /.col-lg-6 -->
      </div><!-- /.row -->
    </div><!-- /.container -->

  </section>
</template>

<script>
export default {
  name: "Banner",
  methods: {
    // https://cn-beijing-data.aliyundrive.net/JijVZc0x%2F34062031%2F64c51b3aaf63c040100d45e19ee65c007276ac60%2F64c51b3acaefe2935ead4bccbc1d6d4ff26b2fcf?di=bj29&dr=34062031&f=64c51b3aaf63c040100d45e19ee65c007276ac60&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27saga_1.0.3.exe&security-token=CAIS%2BgF1q6Ft5B2yfSjIr5eBMYncr7xn%2FZjeSEGHrEZnWb5hgZSZozz2IHFPeHJrBeAYt%2FoxmW1X5vwSlq5rR4QAXlDfNT7bORylqFHPWZHInuDox55m4cTXNAr%2BIhr%2F29CoEIedZdjBe%2FCrRknZnytou9XTfimjWFrXWv%2Fgy%2BQQDLItUxK%2FcCBNCfpPOwJms7V6D3bKMuu3OROY6Qi5TmgQ41Uh1jgjtPzkkpfFtkGF1GeXkLFF%2B97DRbG%2FdNRpMZtFVNO44fd7bKKp0lQLukMWr%2Fwq3PIdp2ma447NWQlLnzyCMvvJ9OVDFyN0aKEnH7J%2Bq%2FzxhTPrMnpkSlacGoABeWShaq7cPFmclUfsNkg2n%2BTYr2Lhs%2FZAc75KOD6Zlk9SUKNhRvcorfGkkN3t8ht3K9LP5Rexo1%2B%2Fv4HdMdw%2FOTGQFRDSqT6kLBX2KX5CihKilftQ0KLKE82VF63MLwu8KZXsTCzL3y6UJrsnapNiFBbKDnYrQ%2B%2BKQsyn%2BKfK5Pc%3D&u=e858bb03e5a54f889e3e86c4aa1d3e69&x-oss-access-key-id=STS.NT4z3hBcFJZ5Jg6HF2U1MnQ2A&x-oss-expires=1690694794&x-oss-signature=Z%2B2Ro64dMW793LKbmN%2Bt%2B9nf45SGvZus2H8SyV8LGOA%3D&x-oss-signature-version=OSS2
    async winWinload($axios) {
      //  https://gitee.com/taibai1024/sagab7/raw/master/saga_1.0.3.exe
      // const ip = await this.$axios.get("/gh/Alleyway-boop/Figure_bed/image/sagab7_1.0.3_amd64.deb")
      const ip = await this.$axios.get("/taibai1024/sagab7/raw/master/saga_1.0.3.exe")
      console.log(ip)
      return ip
    },
  },
  //    async asyncData(app) {

  //           //  https://gitee.com/taibai1024/sagab7/raw/master/saga_1.0.3.exe
  //         await app.$axios.get("/taibai1024/sagab7/raw/master/saga_1.0.3.exe" )

  // },

}
</script>
<style scoped>
</style>
