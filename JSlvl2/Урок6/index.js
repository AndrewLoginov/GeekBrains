var Main = {
    data() {
        return {
            ruleForm2: {
                date1: '',
                name: '',
            },
            rules2: {
                date1: [
                    { type: 'date', required: true, message: 'Выберите дату рождения', trigger: 'blur' }
                ],
                name: [
                    { required: true, pattern:/^[а-я ,.'-]+$/i
                        , message: 'Напишите имя корректно на русском языке', trigger: 'blur' },
                ],

            }
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
}
var Ctor = Vue.extend(Main)
new Ctor().$mount('#app')