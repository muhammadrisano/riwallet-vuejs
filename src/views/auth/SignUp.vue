<template>
    <div class="wrapper">
         <h3>Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users</h3>
            <p>Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</p>
            <form>
                <Input icon="profile" type="text" placeholder="Enter your username" v-model="state.username" :mt="40"/>
                <Input icon="mail" type="email" placeholder="Enter your Email" v-model="state.email" :mt="40"/>
                <Input icon="lock" type="password" placeholder="Create your password" v-model="state.password" :mt="40"/>
                <Button :mt="50" @fire-event="cobaEvent"/>
                <p>Already have an account? Let's <a href="#">Login</a> </p>
            </form>
    </div>
</template>

<script>
import { reactive } from 'vue'
import Input from '../../components/base/InputV1'
import Button from '../../components/base/ButtonV1'

export default {
  components: {
    Input,
    Button
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
