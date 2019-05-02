new Vue({
    el: "#app",

    data: {
        currencies: {},
        amount: 0,
        from: "EUR",
        to: "USD",
        result: 0,
        loading: false
    },

    mounted() {
        this.getCurrencies();
    },

    computed: {
        formattedCurrencies() {
            return Object.values(this.currencies);
        },

        calculateResult() {
            return (Number(this.amount) * this.result).toFixed(2);
        },

        disabled() {
            return this.amount === 0 || !this.amount || this.loading;
        }
    },

    methods: {
        getCurrencies(){
            const currencies = localStorage.getItem("currencies");

            if(currencies){
                this.currencies = JSON.parse(currencies);
                return;
            }

            axios.get("http://localhost:8088/api/currencies",{/*this is request data*/}, { headers: {"Access-Control-Allow-Origin": "*"}})
            .then(response => {
                console.log(response.data);
                this.currencies = response.data.results;
                localStorage.setItem("currencies", JSON.stringify(response.data.results));
            });

        },

        convertCurrency(){
            const key = `${this.from}_${this.to}`;
            this.loading = true;

            axios.get(`http://localhost:8088/api/currencies/convert?q=${key}`, {/*this is request data*/}, { headers: {"Access-Control-Allow-Origin": "*"}})
            .then(response => {
                console.log(response.data.results[key]);
                
                this.result = response.data.results[key].val;
                this.loading = false;
            })
        }
    },

    watch: {
        from() {
            this.result = 0; 
        },
        to() {
            this.result = 0;
        }
    }
});