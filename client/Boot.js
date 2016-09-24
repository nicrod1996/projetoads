var Game = {};

Game.Boot = function(game){
    
};

Game.Boot.prototype = {
    init:function(){
        // Faz com que os inputs fiquem setados em 1
        this.input.maxPointers = 1;
        this.state.disableVisibilityChange = true;
    },
    preload:function(){
        this.load.image('preloaderBar','assets/loading.png');
    },
    create:function(){
        this.state.start('Preloader');
    }
};