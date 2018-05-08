<div id="mvvm-app">
    <input type="text" v-model="word">
        <p>{{ word }}</p>
        <button v-on: click="sayHi">change model</button>
</div>

    <script src="./js/observer.js"></script>
    <script src="./js/watcher.js"></script>
    <script src="./js/compile.js"></script>
    <script src="./js/mvvm.js"></script>
    <script>
        var vm = new MVVM({
            el: '#mvvm-app',
        data: {
            word: 'Hello World!'
    },
        methods: {
            sayHi: function() {
            this.word = 'Hi, everybody!';
        }
    }
});
</script>