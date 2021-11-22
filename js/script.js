const app = new Vue({

    el: '#app',

    data:{
        eMails:[],
        caricamento: true,
        errore: false
    },

    mounted(){
        this.getMail();
    },

    methods:{

        getMail(){
            this.caricamento = true;
            this.eMails = [];
            for (let i = 0; i < 10; i++) {
                
                axios.get('https://flynn.boolean.careers/exercises/api/random/maild')
                .then((response) =>{
                    const email = response.data.response;
                    
                    console.log(email);
                    this.eMails.push(email);
                    this.caricamento = false;
                })
                .catch((errore)=>{
                    this.caricamento = false;
                    this.errore = true;
                })
                
            }
            
            console.log(this.eMails);
        },

    }
}) 