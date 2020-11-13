<template>
     <button class="btn btn-sign-up" @click="$emit('fire-event', $event)" :style="{ marginTop: mt+ 'px', marginBottom: mb+ 'px'}">Sign Up</button>
</template>

<script>
export default {
  name: 'ButtonV1',
  props: {
    mt: Number,
    mb: Number
  },
  setup () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
  .btn{
    width: 100%;
    padding: 10px;
    font-size: 18px;
    padding: 15px;
    border-radius: 12px;
    border-width: 0;
    outline: none;
    color: #88888F;
    &:hover{
        cursor: pointer;
        background-color: #d4d1d1;
    }
    }
    .btn-sign-up{
        background-color: #dadada;
    }
</style>
