"use strict";

let myArr = [];

for (let i = 1; i < 19; i++){
    let myObj = {};
    myObj.id = i;
    myObj.state = 'UP';
    myObj.uptime = '123';
    myObj.cpu = 25;
    myObj.ram = 97;
    myObj.disk = 35;
    myArr.push(myObj);
}
console.log(myArr);


ajaxCall();

setInterval(ajaxCall, 120000);


function ajaxCall() {

                
            
    for(let server of myArr){
        
        let blockServer = document.getElementById(server.id);
        if(blockServer){
            if (server.state == 'DOWN') blockServer.style.background = 'red';
            else blockServer.style.background = 'none'
        
            if(server.uptime == null) {
                blockServer.querySelector('.timer').innerHTML = 'Нет данных';
            }else{
                blockServer.querySelector('.timer').innerHTML = server.uptime + 'д';
            }

            blockServer.querySelector('.cpu__invisiblebar').style.width = (100 - server.cpu) + '%';
            if(server.cpu == null) {
                blockServer.querySelector('.cpu__percentage').innerHTML = 'Н/Д';
            }else{
                blockServer.querySelector('.cpu__percentage').innerHTML = server.cpu + '%';
            }

            blockServer.querySelector('.ram__invisiblebar').style.width = (100 - server.ram) + '%';
            if(server.ram == null) {
                blockServer.querySelector('.ram__percentage').innerHTML = 'Н/Д';
            }else{
                blockServer.querySelector('.ram__percentage').innerHTML = server.ram + '%';
            }

            blockServer.querySelector('.disk__invisiblebar').style.width = (100 - server.disk) + '%';
            if(server.disk == null) {
                blockServer.querySelector('.disk__percentage').innerHTML = 'Н/Д';
            }else{
                blockServer.querySelector('.disk__percentage').innerHTML = server.disk + '%';
            }
        }
    }


    
}
// Вариант с входящими данными с сервера
// function ajaxCall() {
//     $.ajax({
//         type: "POST",
//         url: window.location,
//         dataType: 'json',
//         data: {type: 'getAlerts'},
//         success: function(msg){
//             console.log('Данные обновлены');
            
//             if (msg['data'].length > 0) {
//                 console.log(msg);
                
            
//                 for(let server of msg['data']){
                    
//                     let blockServer = document.getElementById(server.id);
//                     if(blockServer){
//                         if (server.state == 'DOWN') blockServer.style.background = 'red';
//                         else blockServer.style.background = 'none'
                    
//                         if(server.uptime == null) {
//                             blockServer.querySelector('.timer').innerHTML = 'Нет данных';
//                         }else{
//                             blockServer.querySelector('.timer').innerHTML = server.uptime + 'д';
//                         }

//                         blockServer.querySelector('.cpu__invisiblebar').style.width = (100 - server.cpu) + '%';
//                         if(server.cpu == null) {
//                             blockServer.querySelector('.cpu__percentage').innerHTML = 'Н/Д';
//                         }else{
//                             blockServer.querySelector('.cpu__percentage').innerHTML = server.cpu + '%';
//                         }

//                         blockServer.querySelector('.ram__invisiblebar').style.width = (100 - server.ram) + '%';
//                         if(server.ram == null) {
//                             blockServer.querySelector('.ram__percentage').innerHTML = 'Н/Д';
//                         }else{
//                             blockServer.querySelector('.ram__percentage').innerHTML = server.ram + '%';
//                         }

//                         blockServer.querySelector('.disk__invisiblebar').style.width = (100 - server.disk) + '%';
//                         if(server.disk == null) {
//                             blockServer.querySelector('.disk__percentage').innerHTML = 'Н/Д';
//                         }else{
//                             blockServer.querySelector('.disk__percentage').innerHTML = server.disk + '%';
//                         }
//                     }
//                 }
            
//             }
//         }
//     });
    
// }


