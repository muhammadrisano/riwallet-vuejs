<template>
    <div class="container">
        <div class="wrapper-left">
            <main>
                 <header>
                <h2>Zwallet</h2>
            </header>
            <div class="img-auth">
                <img src="../../assets/img/png-phone2.png" alt="">
                <img src="../../assets/img/png-phone.png" alt="">
            </div>
            <div class="content-auth">
                <h4>App that Covering Banking Needs</h4>
                <p>Zwallet is an application that focussing in banking needs for all users in the world. Always updated and always following world trends. 5000+ users registered in Zwallet everyday with worldwide users coverage.</p>
            </div>
            </main>
        </div>
        <div class="wrapper-right">
            <div class="wrapper-form">
                <router-view></router-view>
        </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Auth'
}
</script>

<style lang="scss" scoped>
    .container{
        height: 100vh;
        display: flex;
        box-sizing: border-box;
        .wrapper-left{
            width: 50%;
            background-image: url('../../assets/img/bg-login.svg');
            background-repeat: no-repeat;
            background-size: cover;
            display: flex;
            flex-direction: column;
            justify-content: center;
            main{
                width: 480px;
                margin: 0 auto;
                 header{
                h2{
                    color: #fff;
                    font-size: 29px;
                    margin-top: 10px;
                }
            }
            }
            .img-auth{
                height: 430px;
                width: 100%;
                position: relative;
                img{
                    &:first-child{
                        width: 300px;
                        position: absolute;
                        top: -30px;
                        left: 40%;
                        transform: translateX(-50%);
                    }
                    &:last-child{
                        width: 320px;
                         top: -30px;
                        position: absolute;
                         left: 60%;
                        transform: translateX(-50%);
                    }
                }
            }
            .content-auth{
                color: #fff;
                h4{
                    font-size: 24px;
                    margin-bottom: 10px;
                }
            p{
                font-size: 14px;
                line-height: 23px;
            }
            }
        }
        .wrapper-right{
            width: 50%;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            justify-content: center;
             .wrapper-form{
                 width: 500px;
                 margin: 0px auto 10px 50px;
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

        }
    }
</style>
