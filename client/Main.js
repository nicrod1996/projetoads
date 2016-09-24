// Instância do Objeto game do framework Phaser
var game = new Phaser.Game(800,600,Phaser.AUTO,'game');

// Adicionando estados de execução, cada estado representando uma Classe(arquivo js)
game.state.add('Boot',Game.Boot);
game.state.add('Preloader',Game.Preloader);
game.state.add('MainMenu',Game.MainMenu);
game.state.add('Level1',Game.Level1);

// Iniciando pelo arquivo Boot.js
game.state.start('Boot');