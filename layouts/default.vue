<template>
  <div class="page-wrapper">
    <!-- <Preloader /> -->
    <nuxt />
  </div>
</template>


<script>
  import Preloader from "~/components/Preloader.vue";
  export default {
    components: {
      Preloader
    },
    head(){
      return {
        title: "saga 有声小说制作工具"
      }
    }

  }
</script>
