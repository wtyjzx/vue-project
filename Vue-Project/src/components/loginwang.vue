<template>
  <!-- <div>
    <span class="col-sm-offset-5">个人用户</span>
    <span class="col-sm-offset-1">企业用户</span>
    <div class="container">
      <div class="form-horizontal">
        <div class="form-group">
          <label class="col-sm-2 control-label col-sm-offset-2">用户名</label>
          <div class="col-sm-4">
            <input type="text" class="form-control" name="" placeholder="请输入用户名">
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label col-sm-offset-2">密码</label>
          <div class="col-sm-4">
            <input type="password" class="form-control" name="" placeholder="请输入密码">
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-2 col-sm-offset-2">
          </div>
          <div class="col-sm-4">
            <button class="btn btn-success">
              <router-link to="/register">注册</router-link>
            </button>
            <button class="btn btn-primary">登录</button>
          </div>
        </div>
      </div>
    </div>
  </div> -->
  <div class="dialog">
    <div class="loginPage">
        <h1>登录</h1>
        <el-form>
            <el-form-item label="user">
                <el-input type="text" id="user" v-model="formName.user" @blur="inputBlur('user',formName.user)"></el-input>
                <p>{{formName.userError}}</p>
            </el-form-item>
            <el-form-item label="password">
                <el-input type="password" id="password" v-model="formName.password" @blur="inputBlur('password',formName.password)"></el-input>
                <p>{{formName.passwordError}}</p>
            </el-form-item>
            <el-button type="primary" @click="submitForm('formName')" v-bind:disabled="formName.beDisabled"><a href="#/">确定</a></el-button>
            <el-button @click="resetForm">重置</el-button>
        </el-form>              
    </div>
</div>
</template>
<script>
//import bootstrap from './static/bootstrap/js/bootstrap.js'
//import './static/bootstrap/js/bootstrap.js'
// //export default {
//   name: 'Loginwang',
//   data() {
//     return {
//       msg: hello
//     }
//   }
// }

 import Axios from 'axios'
    export default {
        name: 'Loginwang',
        data () {
            return {
                formName: {//表单中的参数
                    user: '',
                    userError: '',
                    password: '',
                    passwordError: '',
                    beDisabled: true
                },
                beShow: false//传值给父组件
            }           
        },
        /*props:[
                'fromParent'
        ],*/
        methods: {
            resetForm:function(){
                this.formName.user = '';
                this.formName.userError = '';
                this.formName.password = '';
                this.formName.passwordError = '';
            },
            submitForm:function(formName){
                //与父组件通信传值
                //this.$emit('showState', [this.beShow,this.formName.user])
                //提交user password
                var user = this.formName.user,
                    password = this.formName.password;
                    console.log(user,password)
                Axios.get('../../src/php/login.php?user='+user+'&password='+password)
                     .then(function(res){
                        console.log(res)

                     })
                     .catch(function(){

                     })
            },
            inputBlur:function(errorItem,inputContent){
                if (errorItem === 'user') {
                    if (inputContent === '') {
                        this.formName.userError = '用户名不能为空'
                    }else{
                        this.formName.userError = '';
                    }
                }else if(errorItem === 'password') {
                    if (inputContent === '') {
                        this.formName.passwordError = '密码不能为空'
                    }else{
                        this.formName.passwordError = '';
                    }
                }
                //对于按钮的状态进行修改
                if (this.formName.user != '' && this.formName.password != '') {
                    this.formName.beDisabled = false;
                }else{
                    this.formName.beDisabled = true;
                }
            }
        }
    }
</script>

<style scoped>
  html,body{
        margin: 0;
        padding: 0;
        position: relative;
       
    }
    .dialog{
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.8);
    }
    .loginPage{
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -150px;
        margin-left: -175px;
        width: 350px;
        min-height: 300px;
        padding: 30px 20px 20px;
        border-radius: 8px;
        box-sizing: border-box;
        background-color: rgb(148, 207, 247);
    }
    .loginPage p{
        color: red;
        text-align: left;
    }




</style>







