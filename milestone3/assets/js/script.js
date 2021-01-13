let app = new Vue({
    el:"#app",
    data:{

        RicercaUtente: '',
        listaFilm:[],
        serieTV: [],
      

    },
 methods: {

        CercaFilm: function (){
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=607fc4414fee1dbd9cc63bfb18bf753d&language=en-US&&query=${this.RicercaUtente}&page=1&include_adult=false`
              ).then(response=>{
                console.log(response.data.results);
                this.listaFilm = response.data.results;

        this.listaFilm.forEach(element => {
                    
                    let vote = Math.ceil(element.vote_average/2);
                     console.log(vote);
                    element.vote_average = vote;

                    if(element.original_language == "en"){
            element.original_language = "gb";
          }else if(element.original_language == "zh"){
            element.original_language = "cn";
          }else if(element.original_language == "ko"){
            element.original_language = "kr";
          }else if(element.original_language == "vi"){
            element.original_language = "vn";
          }else if(element.original_language == "hu"){
            element.original_language = "eu";
             }else if(element.original_language == "et"){
            element.original_language = "ee";
          }else if(element.original_language == "ja"){
            element.original_language = "jp";
          }else if(element.original_language == "da"){
            element.original_language = "dk";
          }

           axios.get(`https://api.themoviedb.org/3/search/tv?api_key=607fc4414fee1dbd9cc63bfb18bf753d&language=it_IT&query=${this.RicercaUtente}`)
        .then(response => {
          this.serieTV = response.data.results;
          this.serieTV.forEach((element) => {
            let vote = Math.ceil(element.vote_average / 2);
            element.vote_average = vote;
                         if(element.original_language == "en"){
            element.original_language = "gb";
          }else if(element.original_language == "zh"){
            element.original_language = "cn";
          }else if(element.original_language == "ko"){
            element.original_language = "kr";
          }else if(element.original_language == "vi"){
            element.original_language = "vn";
          }else if(element.original_language == "hu"){
            element.original_language = "eu";
             }else if(element.original_language == "et"){
            element.original_language = "ee";
          }else if(element.original_language == "ja"){
            element.original_language = "jp";
          }else if(element.original_language == "da"){
            element.original_language = "dk";
          }
          });
        })
    
       

       
           
                   
                });


            });

        }

        





    },
    mounted() {
        


    },
})