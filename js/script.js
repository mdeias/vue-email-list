const app = new Vue({

    el: '#app',

    data:{
        eMails:[]
    },

    mounted(){
        this.getMail();
    },

    methods:{

        getMail(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) =>{
                this.email = response.data.response;

                console.log(this.email);
            })

        },

    }
}) 