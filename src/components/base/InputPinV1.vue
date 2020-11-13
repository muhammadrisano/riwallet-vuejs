<template>
    <div class="wrapper">
        <input type="number" :value ="number1" @keyup="handleInput(1, $event)" ref="input1" max="9" >
        <input type="number" :value ="number2" @keyup="handleInput(2, $event)" ref="input2">
        <input type="number" :value ="number3" @keyup="handleInput(3, $event)" ref="input3">
        <input type="number"  :value ="number4" @keyup="handleInput(4, $event)" ref="input4">
        <input type="number"  :value ="number5" @keyup="handleInput(5, $event)" ref="input5">
        <input type="number" :value ="number6" @keyup="handleInput(6, $event)" ref="input6">
    </div>
</template>

<script>
import { ref, onMounted } from 'vue'
export default {
  setup () {
    const before = ref('')
    const number1 = ref('')
    const number2 = ref('')
    const number3 = ref('')
    const number4 = ref('')
    const number5 = ref('')
    const number6 = ref('')
    const input1 = ref(null)
    const input2 = ref(null)
    const input3 = ref(null)
    const input4 = ref(null)
    const input5 = ref(null)
    const input6 = ref(null)
    function handleInput (from, e) {
      const value = e.target.value
      let container = []
      if (value > 9) {
        container = value.toString().split('')
        e.target.value = container[0]
      }
      if (from === 1) {
        if (value >= 0 && value !== '') {
          input2.value.focus()
        }
        if (value === before.value && e.keyCode === 8) {
          input1.value.focus()
        }
        number1.value = container[0] || value
      } else if (from === 2) {
        if (value >= 0 && value !== '') {
          input3.value.focus()
        }
        if (value === before.value && e.keyCode === 8) {
          input1.value.focus()
        }
        number2.value = container[0] || value
      } else if (from === 3) {
        if (value >= 0 && value !== '') {
          input4.value.focus()
        }
        if (value === before.value && e.keyCode === 8) {
          input2.value.focus()
        }
        number3.value = container[0] || value
      } else if (from === 4) {
        if (value >= 0 && value !== '') {
          input5.value.focus()
        }
        if (value === before.value && e.keyCode === 8) {
          input3.value.focus()
        }
        number4.value = container[0] || value
      } else if (from === 5) {
        if (value >= 0 && value !== '') {
          input6.value.focus()
        }
        if (value === before.value && e.keyCode === 8) {
          input4.value.focus()
        }
        number5.value = container[0] || value
      } else if (from === 6) {
        if (value >= 0 && value !== '') {
          input6.value.focus()
        }
        if (value === before.value && e.keyCode === 8) {
          input5.value.focus()
        }
        number6.value = container[0] || value
      }
      before.value = e.target.value
    }
    onMounted(() => {
      console.log(number1.value)
    })
    console.log(input1.value)
    return {
      input1,
      input2,
      input3,
      input4,
      input5,
      input6,
      number1,
      number2,
      number3,
      number4,
      number5,
      number6,
      handleInput,
      before

    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper{
    display: flex;
    width: 100%;
    justify-content: space-between;
    input{
        width: 53px;
        height: 65px;
        border-radius: 10px;
        outline: none;
        border: 1px solid rgba(169, 169, 169, 0.6);
        font-size: 30px;
        text-align: center;
    }
}
</style>
