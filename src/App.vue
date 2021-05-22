<template>
	<HelloWorld />
</template>

<script>
import HelloWorld from "~/components/HelloWorld";

export default {
  components: {
    HelloWorld,
  },
  data() {
    return {
      isShow: false,
      count: 0,
    };
  },
  methods: {
    handler() {
      this.isShow = !this.isShow;
      this.count += 1;
    },
  },
};
</script>
