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

            for (let i = 0; i < 10; i++) {
                
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) =>{
                    const email = response.data.response;
                    
                    console.log(email);
                    this.eMails.push(email);
                })
                
            }
            
            console.log(this.eMails);
        },

    }
}) 