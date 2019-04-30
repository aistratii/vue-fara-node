new Vue({
    el: "#app",

    data: {
        currencies: {

        }
    },

    mounted() {
        this.getCurrencies();
    },

    methods: {
        getCurrencies(){
            const currencies = localStorage.getItem("currencies");

            if(currencies){
                this.currencies = JSON.parse(currencies);
                return;
            }

            axios.get("http://localhost:8088/api/currencies",{/*this is request data*/}, {
                headers: {
                    "Access-Control-Allow-Origin": "*"
                }
            })
            .then(response => {
                console.log(response.data);
                this.currencies = response.data.results;
                localStorage.setItem("currencies", JSON.stringify(response.data.results));
            });

        }
    }
});