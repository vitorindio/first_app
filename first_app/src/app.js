const MeuApp = {
    data(){
        return {
            name: "",
            age: "",
            input_name: "",
            input_age: "",
        }
    },
    methods: {
        submitForm(e){
            e.preventDefault();
            this.name = this.input_name;
            this.age = this.input_age;

        }
    }
}

// monta o app com o id da aplicação
Vue.createApp(MeuApp).mount("#app")