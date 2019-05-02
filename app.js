Vue.component("card", {
    props: ["title", "content"],
    data() {
        return {
            claps: 0
        }
    },
    template: `
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">
                    {{ title }}
                </h3>

                <div class="card-text">
                    {{ content }}
                </div>
                <div class="text-center text-muted display-4">{{claps}}</div>

                <button @click="clapForArticle" class="btn btn-info btn-sm">Clap for me</button>

                <button @click="deleteArticle" class="btn btn-danger btn-sm">Delete me</button>
            </div>
        </div>
    `,
    methods:{
        deleteArticle(){
            this.$emit("delete-article", this.title)
        },
        clapForArticle(){
            this.claps++;
        }
    }
});

new Vue({
    el: "#app",
    data: {
        articles: [
            {
            title: "sony, în româ",
            content: `ste capitala și cel mai mare oraș din Slovacia și are o populație de aproximativ 430.000 locuitori.[1] Bratislava este situată pe Dunăre, aproape de granițele Slovaciei cu Austria și Ungaria și destul de aproape de granița cu Republica Cehă. Se află la doar 60 de k
            m de Viena.[2] Munții Carpați încep pe teritoriul orașului Malé Karpaty („Carpații Mici”).
            Bratislava este sediul președinției, parlamentului și guvernului slovac. În oraș se 
            află câteva universități, muzee, teatre și`
            },
            {
               title: "lovac poart",
               content: "documentară a localității (sub numele de Brezalauspurc, „cetatea lui Brezalau”) este făcută de Analele de la Salzburg, în care sunt descrise Bătăliile de la Pojon, între bavarezi și unguri, duse în afara zidurilor Castelului Bratislava, în 907.[4] Castelul și-a primit probabil numele de la Predslav, al treilea fiu al regelui Svätopluk I, sau poate de la nobilul local Braslav.[5] Acest nume vechi reapare sub forma Braslava sau Preslava, pe monezi emise de regele Ștefan I al Ungariei, datând din jurul anului 1000.[6] Mai târziu în Evul Mediu, a ajuns la forma finală a "
            },
            {
                title: "Prešporok",
                content: `osony înainte de secolul al XIX-lea). Numele maghiar, încă folosit de vorbitorii acestei limbi, este posibil să fie derivat de la Božaň, conducător din secolul al XI-lea al Castelului Bratislava.[8] Pe lângă aceste nume, în documente din epoca Renașterii orașul a fost numit Istropolis, „Orașul Dunării” în greaca veche.

                Numele actual, Bratislava, datează din 1837, când eruditul slavist Pavel Jozef Šafárik a reconstruit o variantă a lui (Břetislaw),[9] d`
            },
            {
                title: "mai vec",
                content: "(Břetislaw),[9] din nume mai vechi, considerând că erau derivate din numele conducătorului Boemiei Bretislav I. Numele a fost folosit inițial de către membrii mișcării naționale slovace în 1844, ca Bratislav.[9] După primul război mondial, unii reprezentanți non-slovaci ai orașului au încercat să-l redenumească „Wilson City”, în onoarea președintelui american Woodrow Wilson, și pentru a evita încorporarea acestuia în Cehoslovacia. Propunerea a fost respinsă, și numele oficial al orașului a devenit Bratislava în martie 1919, după ce orașul a ajuns să f"
            }
        ]
    },
    methods: {
        removeArticle(event){
            this.articles = this.articles.filter(article => article.title !== event)
        }
    }
});