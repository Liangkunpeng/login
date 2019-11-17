<template>
    <div class="home">
        <div class="home_register">
            <a-form
                    id="components-form-demo-normal-login"
                    :form="form"
                    class="login-form"
                    @submit="handleSubmit">
                <p class="title">账号注册</p>
                <a-form-item>
                    <a-input v-decorator="['userName',{ rules: [{ required: true, message: '请输入用户名' }] }, ]"
                             placeholder='请输入用户名'>
                    </a-input>
                </a-form-item>
                <a-form-item>
                    <a-input v-decorator="['email',{ rules: [{ required: true, message: '请输入邮箱' },{pattern: /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/,message: '邮箱格式不正确'},] }, ]"
                             placeholder='请输入邮箱'>
                    </a-input>
                </a-form-item>
                <a-form-item>
                    <a-input v-decorator="['password',{ rules: [{ required: true, message: '请输入密码' },{validator: validateToNextPassword,},] },]"
                             type="password"
                             placeholder='请输入密码'>
                    </a-input>
                </a-form-item>
                <a-form-item>
                    <a-input v-decorator="['password_again',{ rules: [{ required: true, message: '请输入密码' },{validator: compareToFirstPassword},] },]"
                             type="password"
                             placeholder='请再次输入密码'>
                    </a-input>
                </a-form-item>
                <a-form-item>
                    <a-input v-decorator="['verificat',{ rules: [{ required: true, message: '请输入验证码' }] }, ]"
                             placeholder='验证码'>
                    </a-input>
                    <div class="ver"><img src="../assets/img/yanzhengma.gif" alt="" width="50" height="30"></div>
                    <a-icon type="sync" class="sy" />
                </a-form-item>
                <a-form-item>
                    <a-button type="primary" html-type="submit" class="login-form-button">
                        注册
                    </a-button>
                </a-form-item>
            </a-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Register",
        beforeCreate() {
            this.form = this.$form.createForm(this, { name: 'normal_login' });
        },
        methods: {
            handleSubmit(e) {
                e.preventDefault();
                this.form.validateFields((err, values) => {
                    if (!err) {
                        console.log('Received values of form: ', values);

                    }
                });
            },
            compareToFirstPassword(rule, value, callback) {
                const form = this.form;
                if (value && value !== form.getFieldValue('password')) {
                    callback('两次密码不相同');
                } else {
                    callback();
                }
            },
            validateToNextPassword(rule, value, callback) {
                const form = this.form;
                if (value && this.confirmDirty) {
                    form.validateFields(['confirm'], { force: true });
                }
                callback();
            },
        },
    }
</script>

<style lang="less" scoped>
.home{
    width: 100%;
    height: 100%;
    background: url(../assets/img/bg.jpg) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    overflow-y: hidden;
    .home_register{
        width: 300px;
        height: 470px;
        margin: 0 auto;
        margin-top: 100px;
        background-color: #fff;
        border: 1px solid #cccccc;
        box-shadow:1px 1px 1px #ccc,1px -1px 1px #ccc,-1px 1px 1px #ccc,-1px -1px 1px #ccc;
        border-radius: 10px;
        .login-form{
            .title{
                text-align: center;
                margin-top: 30px;
                color: #8bb555;
            }
            .ant-row{
                width: 70%;
                margin: 0 auto;
                height: 55px;
                position: relative;
                font-size: 13px;
                .ver{
                    width: 50px;
                    height: 30px;
                    border: 1px solid #cccccc;
                    position: absolute;
                    top: -7px;
                    right: 20px;
                    img{
                        position: absolute;
                        top: 0;
                        left: 0px;
                    }
                }
                .sy{
                    position: absolute;
                    top: 3px;
                    right: 0;
                    color: #b9b9b6;
                }
                .ant-input{
                    border: none;
                    border-bottom: 1px solid #cccccc;
                    border-radius: 0;
                    padding: 0;
                    padding-bottom: 5px;
                    margin-top:20px;
                }
                .login-form-button{
                    width: 100%;
                    height: 30px;
                    border-radius: 0;
                    background-color: #80c216;
                    border: #80c216;
                    margin-top:25px;
                }
                .reg{
                    font-size: 8px;
                    color: #8bb555;
                    cursor: pointer;
                }
                .forg{
                    float: right;
                    color: #8bb555;
                    font-size: 5px;
                    cursor: pointer;
                }
            }
        }
    }

}
.ant-input:focus {
    text-indent: 0;
    border-color: #ffffff;
    border-right-width: 1px !important;
    outline: 0;
    box-shadow: 0 0 0 0px rgba(0,0,0,0);
}
</style>