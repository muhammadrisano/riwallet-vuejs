<template>
    <div
    class="wrapper-input"
    :style="{ marginTop: mt+ 'px', marginBottom: mb+ 'px'}">
        <img :src="require(`../../assets/img/icon/${icon}.png`)">
        <input :type="type" :value="modelValue" :placeholder="placeholder" @input="updateValue">
    </div>
</template>

<script>
// import mailIcon from '../../assets/img/icon/mail.png'
export default {
  name: 'InputV1',
  props: {
    modelValue: String,
    placeholder: {
      type: String,
      default: ''
    },
    mt: Number,
    mb: Number,
    type: {
      type: String,
      default: 'text'
    },
    icon: {
      type: String,
      default: 'mail'
    }
  },
  setup (props, context) {
    const updateValue = (event) => {
      context.emit('update:modelValue', event.target.value)
    }
    return {
      updateValue
    }
  }
}
</script>

<style lang="scss" scoped>
    .wrapper-input{
        position: relative;
        margin-top: 45px;
        background-color: yellow;
        img{
            position: absolute;
            top: 50%;
            transform: translateY(-60%);
        }
        input{
        width: 100%;
        border-top-width: 0;
        border-left-width: 0;
        border-right-width: 0;
        border-bottom-width: 2px;
        font-size: 16px;
        padding: 10px 5px 10px 40px;
        box-sizing: border-box;
        outline: none;
        }
    }
</style>
