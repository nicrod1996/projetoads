Game.Preloader = function(game){
    this.preloadBar = null;
}

Game.Preloader.prototype  = {
    preload:function(){
        this.preloadBar = game.add.sprite(this.world.centerX,
                                            this.world.centerY,'preloaderBar');
        this.preloadBar.anchor.setTo(0.5,0.5);
        this.time.advancedTiming = true;
        this.load.setPreloadSprite(this.preloadBar);
        
        // Carregar todos arquivos (assets)
        
        this.load.image('background','assets/background.png'); 
        this.load.image('frame','assets/frame.png');
        this.load.image('botao','assets/botao.png');
        
        this.load.spritesheet('ryu','assets/ryu.png',84.5,80,4); 
        this.load.spritesheet('monstro','assets/monster_cyclops_axe.png',63,96,2);
        
    },
    
    create:function(){
        this.state.start('Level1');
    }
    
};