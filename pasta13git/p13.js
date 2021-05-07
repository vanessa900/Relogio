(function(){
   var relogio = document.getElementById('relogio')
   

   function getHour(){
    var date = new Date()
    var h = format(date.getHours())
    var m = format(date.getMinutes())
    var s = format(date.getSeconds())
    return `${h}:${m}:${s}`
    
   }
function format(t){
    return t < 10 ? '0' + t : t
}
 setInterval(function(){
     relogio.textContent=getHour()
 },1000)
})()