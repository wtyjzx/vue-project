<template>
  <!-- <div>
    
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
            <button class="btn btn-success">注册
            </button>
<!-- <button class="btn btn-primary">登录</button>
 -->
          <!-- </div>
        </div>
      </div>
    </div>
  </div> --> 
  <div  class="demo-1">

    用户注册

    <el-input v-model="input" placeholder="请输入用户名" size="small" class="in-1">
    </el-input>
    <el-input v-model="input" placeholder="请输入密码" size="small" class="in-2">
    </el-input>
    <el-input v-model="input" placeholder="再次确认密码" size="small" class="in-3">
    </el-input>

    
      <el-row>
      <el-button round size="medium">注册</el-button>
     
      </el-row>
      
  </div>
   

   


</template>
<script>

//import bootstrap from './static/bootstrap/js/bootstrap.js'
//import './static/bootstrap/js/bootstrap.js'

export default {
  name: 'Register',
  data() {
    return {
      msg: "hello",
      input: ''
    }
  }
}

</script>

<style>

      .demo-1{
        box-sizing: border-box;
        background-color: rgb(178, 211, 212);
        width: 400px;
        height:300px;
       padding: 60px;
       margin: 240px;
       margin-left: 400px;

      }
      .in-1{
        margin-bottom: 20px;
      }
      .in-2{
        margin-bottom: 20px;
      }
       .in-3{
        margin-bottom: 20px;
      }
</style>


