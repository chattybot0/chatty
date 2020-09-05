function check(msg){
    if(msg.content=="!dice"){
             msg.reply(Math.floor(Math.random() * (6 - 1) + 1));
    }
}