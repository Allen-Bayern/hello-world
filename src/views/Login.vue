<template>
  <div id="login">
    <h1 class="message">{{ msg }}</h1>
    <div class="model-mask">
      <div class="model-wrapper">
        <div class="model-container">
          <div class="main">
            <div class="form">
              <h3 @click="showRegister">创建账户</h3>
              <transition name="slide">
                <div class="register" :class="{ show: isShowRegister }">
                  <input
                    type="text"
                    placeholder="用户名"
                    v-model="register.username"
                  />
                  <input
                    type="password"
                    placeholder="密码"
                    v-model="register.password"
                    @keyup.enter="onRegister"
                  />
                  <p :class="{ error: register.isError }">
                    {{ register.notice }}
                  </p>
                  <div class="button" @click="onRegister">创建账号</div>
                </div>
              </transition>
              <h3 @click="showLogin">登录</h3>
              <transition name="slide">
                <!-- transition是Vue动画的实现方式 -->
                <div class="login" :class="{ show: isShowLogin }">
                  <input
                    type="text"
                    placeholder="输入用户名"
                    v-model="login.username"
                  />
                  <input
                    type="password"
                    placeholder="密码"
                    v-model="login.password"
                    @keyup.enter="onLogin"
                  />
                  <p :class="{ error: login.isError }">{{ login.notice }}</p>
                  <div class="button" @click="onLogin">登录</div>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      msg: "登录页",
      isShowRegister: false,
      isShowLogin: true,
      login: {
        username: "",
        password: "",
        notice: "Give your username and password",
        isError: false,
      },
      register: {
        username: "",
        password: "",
        notice:
          "You'd remember your username and password after creating the account.",
        isError: false,
      },
    };
  },

  methods: {
    showRegister() {
      // 点击“创建账户”后，显示注册并隐藏登录
      this.isShowRegister = true;
      this.isShowLogin = false;
    },

    showLogin() {
      // 与showRegister()方法正好相反
      this.isShowLogin = true;
      this.isShowRegister = false;
    },

    onRegister() {
      // 创建正则表达式
      // [\u4e00-\u9fa5]表示所有汉字
      let usernameRE = /^[\w\u4e00-\u9fa5]]{3,15}$/;
      if (!usernameRE.test(this.register.username)) {
        this.register.isError = true;
        this.register.notice = "用户名3~15个字符，仅限于字母数字下划线中文";
        return;
      }

      let passwordRE = /^.{6,16}$/;
      if (!passwordRE.test(this.register.password)) {
        this.register.isError = true;
        this.register.notice = "密码长度为6~16个字符";
        return;
      }

      this.register.isError = false;
      this.register.notice = "";
      console.log(
        `Start register..., username: ${this.register.username}, password:${this.register.password}`
      );
    },

    onLogin() {
      let usernameRE = /^[\w\u4e00-\u9fa5]{3,15}$/;
      if (!usernameRE.test(this.login.username)) {
        this.login.isError = true;
        this.login.notice = "用户名3~15个字符，仅限于字母数字下划线中文";
        return;
      }

      let passwordRE = /^.{6,16}$/;
      if (!passwordRE.test(this.login.password)) {
        this.login.isError = true;
        this.login.notice = "密码长度为6~16个字符";
        return;
      }

      this.login.isError = false;
      this.login.notice = "";
      console.log(
        `start login..., username: ${this.login.username}, password:${this.login.password}`
      );
    },
  },
};
</script>

<style lang="stylus" scoped>
.model-mask
  position fixed
  z-index 100
  top 0
  left 0
  width 100%
  height 100%
  background-color rgba(0, 0, 0, 0.7)
  display table
  transition opacity .3s ease

.model-wrapper
  display tabel-cell
  vertical-align middle

.model-container
  width 800px
  height 500px
  margin 0px auto
  background-color #fff
  border-radius 2px
  box-shadow 0 2px 8px rgba(0, 0, 0, .33)
  transition all 0.3s ease
  font-family Arial, Helvetica, sans-serif
  display flex

.main
  flex 1
  background #36bc64 url(//cloud.hunger-valley.com/17-12-13/38476998.jpg-middle) center center no-repeat
  background-size contain

.form
  width 270px
  border-left 1px solid #ccc
  overflow hidden

h3
  padding 10px 20px
  margin-top -1px
  font-weight normal
  font-size 16px
  border-radius 4px
  margin-top 18px
  cursor pointer

.button
  background-color #2bb964
  height 36px
  line-height 36px
  text-align center
  font-weight bold
  color #fff
  border-radius 4px
  margin-top 18px
  cursor pointer

.login .register
  padding 0px 20px
  border-top 1px solid #eee
  height 0
  overflow hidden
  transition height 0.4s
  &.show
    height 193px
  .input
    display block
    width 100%
    height 35px
    line-height 35px
    padding 0 6px
    border-radius 4px
    border 1px solid #ccc
    outline none
    font-size 14px
    margin-top 10px
  .input:focus
    border: 3px solid #9dcaf8
  p
    font-size 12px
    margin-top 10px
    color #444
  .error
    color red

.login
  border-top 0
</style>
