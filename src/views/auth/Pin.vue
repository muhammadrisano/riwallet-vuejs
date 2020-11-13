<template>
    <div class="wrapper">
         <h3>Secure Your Account, Your Wallet, and Your Data With 6 Digits PIN That You Created Yourself.</h3>
            <p>Create 6 digits pin to secure all your money and your data in Zwallet app. Keep it secret and don’t tell anyone about your Zwallet account password and the PIN.</p>
            <form>
                <InputPin/>
                <Button :mt="50" @fire-event="cobaEvent"/>
                <p>Already have an account? Let's <a href="#">Login</a> </p>
            </form>
    </div>
</template>

<script>
import { reactive, onMounted } from 'vue'
import InputPin from '../../components/base/InputPinV1'
import Button from '../../components/base/ButtonV1'

export default {
  name: 'Pin',
  components: {
    Button,
    InputPin
  },
  setup () {
    const state = reactive({
      email: '',
      password: ''
    })
    const cobaEvent = (e) => {
      e.preventDefault()
      //   console.log('hello')
      window.alert('hello')
    }
    onMounted(() => {
      console.log(process.env.NODE_ENV)
    })
    return {
      state,
      cobaEvent
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper{
    h3{
                    font-size: 24px;
                    color: #3A3D42;
                    line-height: 33px;
                }
            p{
                font-size: 14px;
                line-height: 23px;
                font-size: rgba(58, 61, 66, 0.6);;
            }
            form{
                .wrapper-input{
                    position: relative;
                    margin-top: 45px;
                    background-color: yellow;
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
                p{
                    font-size: 16px;
                    color:rgba(58, 61, 66, 0.8);
                    margin-top: 40px;
                    text-align: center;
                    a{
                        text-decoration: none;
                        margin-left: 5px;
                    }
                }
            }
}
</style>
