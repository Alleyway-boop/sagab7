<template>
  <div>
    <Header />
    <Banner />
    <Features />
    <Screenshots />
    <Footer />
  </div>
</template>
<script>
import Header from "~/components/Header.vue";
import Banner from "~/components/Banner.vue";
import Features from "~/components/Features.vue";
import Screenshots from "~/components/Screenshots.vue";
import Footer from "~/components/Footer.vue";
export default {
  components: {
    Header,
    Banner,
    Features,
    Screenshots,
    Footer,
  }
}
</script>
