var app=new Vue({
    el: '#app',
    
    data: {
        shops:[],
    },
    mounted(){

        // axios.get("https://api.dailymotion.com/videos?channel=sport&limit=10").then(respuesta=>this.info=respuesta.data.list)
         axios.get("http://127.0.0.1:8000").then(respuesta=>this.shops=respuesta.data)
        // axios.post("http://127.0.0.1:8000", {NewShop}).then(respuesta=>this.shops=respuesta.data)
    },
});

