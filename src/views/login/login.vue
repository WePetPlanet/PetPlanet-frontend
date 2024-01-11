<template>
    <div :style="backNote" class="login_container">
        <div class="login_box">
            <!--头像区域-->
            <div class="avatar_box">
                <img src="https://th.bing.com/th/id/R.213134b717b3e23f81e9414d1a741d82?rik=KFzjzjX90pdV9w&riu=http%3a%2f%2fwww.pp3.cn%2fuploads%2f20120312LW%2f15.jpg&ehk=SA67Nsvu2KYlQJGgIfFwLf0MjHvGuanGkmpT8n8ynsM%3d&risl=&pid=ImgRaw&r=0" alt="login">
            </div>
            <!--登录表单-->
            <el-form :model="loginForm" :rules="loginRules" ref="loginRef" label-width="0px" class="loginForm">
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="密码登录" name="first">
                        <!--登录表单-->
                        <el-form-item prop="username">
                            <el-input v-model="loginForm.username" prop="username" prefix-icon="el-icon-user-solid" placeholder="账号"></el-input>
                        </el-form-item>

                        <el-form-item prop="password">
                            <el-input v-model="loginForm.password" prop="password"  type="password" prefix-icon="el-icon-lock" placeholder="密码"></el-input>
                        </el-form-item>

                        <el-form-item class="btn-item">
                            <el-button type="primary" @click="login">登录</el-button>
                            <el-button type="info" @click="resetLoginForm">重置</el-button>
                        </el-form-item>
                        <!--                    </el-form>-->
                    </el-tab-pane>
                    <el-tab-pane label="验证码登录" name="second">
                        <!--登录表单-->
                        <el-form-item prop="tel">
                            <el-input v-model="loginForm.tel" prop="tel" prefix-icon="el-icon-user-solid" placeholder="手机号"></el-input>
                        </el-form-item>

                        <el-form-item prop="password">
                            <el-button style="margin-right: 25px" type="primary" @click="loginSendSms" plain>发送验证码</el-button>
                            <el-input v-if="this.telCode" style="width: 63%; float: right" v-model="loginFormTelCode.code" prop="password" type="password" prefix-icon="el-icon-lock" placeholder="验证码"></el-input>
                        </el-form-item>

                        <el-form-item class="btn-item">
                            <el-button type="primary" @click="loginByTelCode">登录</el-button>
                            <el-button type="info" @click="resetLoginForm">重置</el-button>
                        </el-form-item>
                    </el-tab-pane>
                    <el-tab-pane label="" :disabled=true name="fourth"></el-tab-pane>
                    <el-tab-pane label="" :disabled=true name="fifth"></el-tab-pane>
                    <el-tab-pane label="注册账号" name="third">
                        <!--登录表单-->
                        <el-form-item prop="tel">
                            <el-input v-model="loginForm.tel" prop="tel" prefix-icon="el-icon-user-solid" placeholder="手机号"></el-input>
                        </el-form-item>

                        <el-form-item prop="password">
                            <el-button style="margin-right: 25px" type="primary" @click="registerSendSms" plain>发送验证码</el-button>
                            <el-input v-if="this.telRegisterCode" style="width: 63%; float: right" v-model="registerFormTelCode.code" prop="password" type="password" prefix-icon="el-icon-lock" placeholder="验证码"></el-input>
                        </el-form-item>

                        <el-form-item class="btn-item">
                            <el-button type="primary" @click="confirm">确定</el-button>
                            <el-button type="info" @click="resetLoginForm">取消</el-button>
                        </el-form-item>
                    </el-tab-pane>
                </el-tabs>
            </el-form>
        </div>
        <!--        填写注册信息表单-->
        <el-dialog
                title="填写工商信息"
                :visible.sync="editDialogVisible"
                width="60%">
            <el-form :model="editForm" :rules="editFormRules" ref="editFormRef" label-width="120px">
                <el-form-item label="企业名称">
                    <el-input v-model="editForm.name"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="editForm.password"></el-input>
                </el-form-item>
                <el-form-item label="法定代表人">
                    <el-input v-model="editForm.legalperson"></el-input>
                </el-form-item>
                <el-form-item label="注册资本（万）">
                    <el-input v-model="editForm.fund"></el-input>
                </el-form-item>
                <el-form-item label="成立日期">
                    <el-date-picker
                            v-model="editForm.date"
                            type="date"
                            placeholder="选择日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="企业类型">
                    <el-select v-model="editForm.type" placeholder="请选择">
                        <el-option
                                v-for="item in typeOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="经营状态">
                    <el-select v-model="editForm.status" placeholder="请选择">
                        <el-option
                                v-for="item in statusOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="注册地址">
                    <el-input v-model="editForm.address"></el-input>
                </el-form-item>
                <el-form-item label="统一社会信用代码">
                    <el-input v-model="editForm.code"></el-input>
                </el-form-item>
                <el-form-item label="经营范围">
                    <el-input
                            maxlength="200"
                            show-word-limit
                            type="textarea"
                            :autosize="{ minRows: 2, maxRows: 4}"
                            placeholder="请输入内容"
                            v-model="editForm.range">
                    </el-input>
                </el-form-item>
                <el-form-item label="企业注册凭证:">
                    <el-upload
                            class="upload-demo"
                            :action="fileUrl"
                            :on-change="handleChangePhotoFile"
                            :before-remove="beforeEnglishRemove"
                            multiple
                            name="myfile"
                            :limit="1"
                            :on-exceed="handleEnglishExceed"
                            :file-list="filePhoto">
                        <el-button size="small" type="primary">点击上传</el-button>
                    </el-upload>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
    <el-button @click="editDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="register">确 定</el-button>
  </span>
        </el-dialog>
    </div>
</template>

<script>
import { ElNotification } from 'element-plus'
import axios from "axios";
import {setLocalStorage} from "../../utils/localstorage.ts";
    //验证手机号规则
    const checkMobile = (rule,value,cb)=>{
        // 手机号验证正则表达式
        const regMobile = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
        if(regMobile.test(value)){
            return cb();
        }
        cb(new Error('请输入合法的手机号'))
    }
    export default {
        data(){
            return{
                editForm:{
                    username:'admin',
                    tel:'',
                    password:'admin',
                    introduce:'',
                    legalperson:'',
                    fund:'',
                    date:'',
                    type:'',
                    status:'',
                    address:'',
                    code:'',
                    range:'',
                    photo:''
                },
                editDialogVisible:false,
                telCode:'',
                telRegisterCode:'',
                activeName: 'first',
                backNote:{
                    backgroundImage:"xx",
                    backgroundRepeat:"no-repeat",
                    backgroundPosition:"center",
                    backgroundSize:"100% 100%"
                },
                loginFormTelCode:{tel:'',code:''},
                registerFormTelCode:{tel:'',code:''},
                //这是登录表单的数据绑定对象
                // loginForm:{tel:'15993026554', password:'123456'},
                loginForm:{username:'admin', password:'123456'},
                //表单验证
                loginRules:{
                    tel:[
                        { required: true, message: '请输入用户手机号', trigger: 'blur' },
                        {validator: checkMobile,trigger: 'blur'}
                    ],
                    // password: [
                    //     { required: true, message: '请输入密码', trigger: 'blur' },
                    //     { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
                    // ]
                },
                //表单验证
                editFormRules:{
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
                    ]
                },
                fileUrl:"http://localhost:83/File/upload",
                filePhoto: {name:'',url:''},
                typeOptions:[
                    {
                    value: '有限责任公司',
                    label: '有限责任公司'
                }, {
                    value: '股份有限公司',
                    label: '股份有限公司'
                }, {
                    value: '有限合伙企业',
                    label: '有限合伙企业'
                }, {
                    value: '外商独资公司',
                    label: '外商独资公司'
                }, {
                    value: '个人独资企业',
                    label: '个人独资企业'
                },{
                    value: '国有独资公司',
                    label: '国有独资公司'
                },{
                    value: '其他',
                    label: '其他'
                }],
                statusOptions:[
                    {
                        value: '存续',
                        label: '存续'
                    },{
                        value: '在业',
                        label: '在业'
                    },{
                        value: '吊销',
                        label: '吊销'
                    },{
                        value: '注销',
                        label: '注销'
                    },{
                        value: '迁入',
                        label: '迁入'
                    },{
                        value: '迁出',
                        label: '迁出'
                    },{
                        value: '停业',
                        label: '停业'
                    },{
                        value: '清算',
                        label: '清算'
                    }
                ],


            }
        },
        methods:{
            //点击重置按钮，重置表单信息
            resetLoginForm(){
                this.$refs.loginRef.resetFields();
            },
            login(){
              //登录逻辑
              axios({
                method: 'post',
                url: 'auth/login/',
                data: this.loginForm,
                //json不能用
                headers:{'Content-Type':"application/x-www-form-urlencoded"}
              }).then(res => {
                if(res.data.code === 200) {
                  if(res.data.msg === "成功") {
                    localStorage.setItem("Authorization", res.data.data.token)

                    console.log("设置token到localStorage")
                    //登陆成功
                    ElNotification({
                      title: 'Success',
                      message: '登录成功',
                      type: 'success',
                    })
                    //跳转到home
                    this.$router.push("/home")
                  }
                }
                console.log(res)
              })



            },
            register(){
                this.$refs.loginRef.validate(async valid=>{
                    if(!valid) return;
                    const {data :res} = await this.$http.post('company/register',this.editForm);
                    console.log(res);
                    if(res.status!==200) return this.$message.error("对不起，登录失败");
                    this.$message.success("恭喜您，登录成功");
                    window.sessionStorage.setItem("comId",res.comId);
                    window.sessionStorage.setItem("jishu",5);
                    await this.$router.push('/home')

                })
            },
            confirm(){
                if(this.telRegisterCode===this.registerFormTelCode.code) {
                    this.editDialogVisible = true
                    return this.$message.success("校验成功")
                }
            },
            handleClick(tab, event) {
                console.log(tab, event);
                this.$refs.loginRef.resetFields();
            },
            loginSendSms(){
                this.$refs.loginRef.validate(async valid=>{
                    if(!valid) return;
                    this.loginFormTelCode.tel = this.loginForm.tel
                    const {data :res} = await this.$http.get('company/login/getTelCode',{params:this.loginFormTelCode});
                    if(res.code!==201){
                        this.telCode = res.message;
                        window.sessionStorage.setItem("comId",res.comId);
                        window.sessionStorage.setItem("jishu",5);
                    }else{
                        if(res.message==='用户不存在，请注册'){
                            this.$refs.loginRef.resetFields();
                            this.activeName= 'third'
                        }
                        return this.$message.error(res.message)
                    }
                })
            },
            registerSendSms(){
                this.$refs.loginRef.validate(async valid=>{
                    if(!valid) return;
                    this.registerFormTelCode.tel = this.loginForm.tel
                    this.editForm.tel = this.loginForm.tel
                    const {data :res} = await this.$http.get('company/register/getTelCode',{params:this.registerFormTelCode});
                    if(res.code!==200){
                        this.$refs.loginRef.resetFields();
                        return this.$message.error(res.message)
                    }else{
                        this.telRegisterCode = res.message;
                    }
                })
            },
            async loginByTelCode(){
                if(this.loginFormTelCode.code===this.telCode){
                    this.loginFormTelCode.tel = this.loginForm.tel
                    this.$message.success("恭喜您，登录成功");
                    await this.$router.push('/home')
                }else{
                    this.$message.error("验证码有误")
                }
            },
            handleChangePhotoFile(file){
                this.filePhoto.name = file.name;
                this.filePhoto.url = 'http://localhost:83/file/upload/'+file.name;
                this.editForm.photo = this.filePhoto.url
                console.log(this.filePhoto.url)
            },
            beforeEnglishRemove(file, filePhoto) {
                return this.$confirm(`确定移除 ${ file.name }？`);
            },
            handleEnglishExceed(files, filePhoto) {
                console.log(this.filePhoto)
                this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + filePhoto.length} 个文件`);
            },

        }


    }
</script>

<style scoped>
    .login_container{
        background-color: #2b4b6b;
        height: 100%;
        background-image: url(https://th.bing.com/th/id/R.87d9a3c0225c9e39674fcae6c208b5eb?rik=sNfVqbB5pQK9sg&riu=http%3a%2f%2fimage.qianye88.com%2fpic%2fcd11f57dfcb092d6e44ae9976bebb848&ehk=RdPwPLKFscla73k76Rgx8t51VKgfzSxY5fz2cwucalM%3d&risl=&pid=ImgRaw&r=0);
    }
    .login_box{
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0.5, 0.5);
        height:350px;
        width: 500px;
        background-color: #ffff;
        border-radius: 3px;
        position: absolute;
        left: 50%;
        top:50%;
        transform: translate(-50%,-50%);
        background-image: url("../assets/login.jpg");
    }
    .avatar_box{
        height: 100px;
        width: 100px;
        border: 1px solid #eee;
        border-radius: 50%;
        padding: 4px;

        box-shadow: 0 0 10px #ddd;
        position: absolute;
        left: 50%;
        transform: translate(-50%,-50%);
        background-color: #fff;

       

    }
    .avatar_box img {
       width: 100%;
            height: 100%;
            border-radius: 50%;
            background-color: #eee;
    }
    .btn-item{
        display: flex;
        margin-bottom: 1px;
        justify-content: flex-end;
    }
    .loginForm{
        position: absolute;
        bottom: 20%;
        width: 100%;
        padding: 0 60px;
        box-sizing: border-box;
    }
</style>