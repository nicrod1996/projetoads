Game.Level1 = function(game){};

var ryu;
var monstro;
var frame;
var botao1,botao2;
var equacao;
var r1,r2;
var vidaRyu = 100;
var vidaMonstro = 50;
var b1certo = false;
var gerarEquacao = function(){
    var n1 = Math.floor(Math.random()*10)+1;
    var n2 = Math.floor(Math.random()*10)+1;

    equacao.setText(n1+" + "+n2 + " = ?");
    if((Math.floor(Math.random()*2)) == 0){
      r1.setText(n1+n2);
      r2.setText(Math.floor(Math.random()*20)+1);
      b1certo = true;
    }else{
      r1.setText(Math.floor(Math.random()*20)+1);
      r2.setText(n1+n2);
      b1certo = false;
    }
};
var abateVida = function(alvo,valor){
  if(alvo == 0){
    if(vidaRyu > 0){
      vidaRyu = vidaRyu + valor;
    }else{
      gameOver();
    }
  }else if(alvo == 1){
    if(vidaMonstro > 0){
      vidaMonstro = vidaMonstro + valor;
    }else{
      ganhou();
    }
  }
 
}

var gameOver = function(){
  console.log("Você perdeu!")
  ryu.destroy();
}

var ganhou = function(){
  console.log("Você Ganhou!")
  monstro.destroy();
}

  
Game.Level1.prototype = {
  
  create:function(){
    
      this.add.sprite(0,0,'background');
      frame = this.add.sprite(370,70,'frame');
      
      ryu = this.add.sprite(117,424,'ryu');
      var parado = ryu.animations.add('parado');
      ryu.animations.play('parado',10,true);
      
      monstro = this.add.sprite(517,424,'monstro');
      var pMonstro = monstro.animations.add('parado');
      monstro.animations.play('parado',5,true);
      
      equacao = this.add.text(frame.x+30,frame.y+20,'',{ font: "60px Verdana", fill: "#FFCC00", align: "center" });
      
      botao1 = this.add.button((frame.x)+30,(frame.y)+140,'botao',function(){
        if(b1certo){
          console.log("Acertou!");
          gerarEquacao();
        }else{
          console.log("Errou!");
          gerarEquacao();
        }
      });
      
      botao2 = this.add.button((frame.x)+210,(frame.y)+140,'botao',function(){
         if(!b1certo){
          console.log("Acertou!");
          gerarEquacao();
          abateVida(1,-20);
        }else{
          console.log("Errou!");
          gerarEquacao();
          abateVida(0,-10);
        }
      });
      r1 = this.add.text(botao1.x+5,botao1.y+2,'',{font:"30px Verdana", fill:"#FFCC00"});
      r2 = this.add.text(botao2.x+5,botao2.y+2,'',{font:"30px Verdana", fill:"#FFCC00"});
      
      gerarEquacao();
      
  },
  
  update:function(){
      
  },
  
  
};
