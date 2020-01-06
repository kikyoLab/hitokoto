<template>
  <div class="home">
    <hitokoto />
  </div>
</template>

<script>
// @ is an alias to /src
import Hitokoto from "@/components/hitokoto.vue";

export default {
  name: "home",
  components: {
    Hitokoto
  }
};
</script>
