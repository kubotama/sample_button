<template>
  <div>
    <button id="sampleButton" @click="onClick">{{ sampleLabel }}</button>
  </div>
</template>

<script>
export default {
  name: "SampleButton",
  data() {
    return {
      sampleLabel: "サンプルのラベル"
    };
  },
  methods: {
    onClick() {
      return;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
