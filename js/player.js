class Player{
    constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;

    }
    getCount(){
        var PlayerCountRef = database.ref("Playercount")
        PlayerCountRef.on("value", function(data){
            PlayerCount = data.val()
        })
    }

    updateCount(Count){
        database.ref("/").update({
            Playercount:Count
        })
    }
    update(){
        var Playerindex = "Players/Player" + this.index
        database.ref(Playerindex).set({
            name: this.name, 
            distance: this.distance
        })
    }
    static getPlayerinfo(){
        var playerInforef = database.ref("Players")
        playerInforef.on("value", (data)=>{
            allPlayers = data.val()
        })
    }
    deletePlayers(){
       var del = database.ref("Players")
       del.set({
           Players: " "
       })

    }
}

