<template>
  <div class="login-register login-sidebar">
    <div class="login-box card">
      <div class="card-body">
        <form class="form-horizontal form-material" @submit="onSubmit">
          <h3 class="text-center m-b-20">Sign In</h3>
          <div class="form-group">
            <div class="col-xs-12">
              <input
                v-model="studentCode"
                class="form-control"
                type="text"
                required
                placeholder="Mã sinh viên"
              />
            </div>
          </div>
          <div class="form-group">
            <div class="col-xs-12">
              <input
                v-model="password"
                class="form-control"
                type="password"
                required
                placeholder="Mật khẩu"
              />
            </div>
          </div>
          <div class="form-group text-center">
            <div class="col-xs-12 p-b-20">
              <button
                class="btn w-100 btn-lg btn-info btn-rounded text-white"
                type="submit"
              >
                Log In
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { signIn } from '../../models/auth'
export default {
  data() {
    return {
      studentCode: '',
      password: '',
    }
  },
  watch: {
    studentCode(newValue, oldValue) {
      console.log(newValue, oldValue)
    },
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault()
      const res = await signIn({
        studentCode: this.studentCode,
        password: this.password,
      })
      console.log(res)
    },
  },
}
</script>
<style lang="scss" scoped>
.login-register {
  background-image: url('https://thanglong.edu.vn/sites/default/files/2020-05/facilities-top-01.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 100%;
  width: 100%;
  padding: 10% 0;
  position: fixed;
}
.login-box {
  width: 400px;
  margin: 0px auto;

  .footer {
    width: 100%;
    left: 0px;
    right: 0px;
  }
}
.login-sidebar {
  padding: 0px;

  margin-top: 0px;
  .login-box {
    right: 0px;
    position: absolute;
    height: 100%;
  }
}
</style>
