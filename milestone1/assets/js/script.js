let app = new Vue({
    el:"#app",
    data:{

        RicercaUtente: '',
        listaFilm:[],

    },
 methods: {

        CercaFilm: function (){
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=607fc4414fee1dbd9cc63bfb18bf753d&language=en-US&&query=${this.RicercaUtente}&page=1&include_adult=false`
              ).then(response=>{
                console.log(response.data.results);
                this.listaFilm = response.data.results;

                


            })
            ;

        }

        


    },
    mounted() {
        


    },
})