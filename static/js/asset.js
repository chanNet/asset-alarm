var vm = new Vue({
    el: "#app",
    data: {
        title:"Hello Asset Alarm",
        context: {
            pages:{
                add_item_page: "./add.html"
            }
        },
        credits:[]
    },
    filters: {
        formatMoney(value) {
            return "¥" + value;
        }
    },
    mounted: function () {
        this.$nextTick(function () {
            this.listView();
        });
    },
    methods: {
        listView: function () {
            this.$http.get("/api/list").then(res=>{
                this.credits = res.body.credits;
            })
        }
    }
});

var add = new Vue({
    el: "#app-add",
    data: {
        title:"Hello add asset"
    },
    filters: {

    },
    mounted: function () {

    },
    methods: {
    }
});

Vue.filter("money",function (value,symbol) {
    return symbol+value;
});