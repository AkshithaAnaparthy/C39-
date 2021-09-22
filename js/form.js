class Form{
   constructor(){
      this.input = createInput("Enter your name")
      this.button = createButton("Play")
      this.greeting = createElement("h4")
      this.reset = createButton("Reset")
   }
   hide(){
      this.input.hide()
      this.button.hide()
      this.greeting.hide()
   }
   display(){
       var title = createElement("h2")
      title.html("Car Racing Game")
      title.position(displayWidth/2, 20)
     
      this.input.position(displayWidth/2 -40, displayHeight/2-80)
    
      this.button.position(displayWidth/2 +30, displayHeight/2)
      this.reset.position(displayWidth/2 -200, 40)
      
      this.button.mousePressed(()=>{
          this.input.hide()
          this.button.hide()
    player.name = this.input.value()
    PlayerCount += 1
    player.index = PlayerCount
    player.update()
    player.updateCount(PlayerCount)
    this.greeting.html("hello" + player.name)
    this.greeting.position(displayWidth/2, displayHeight/2)
      })
      this.reset.mousePressed(()=>{
         game.update(0)
         player.updateCount(0)

         player.deletePlayers()
      })

   }
}