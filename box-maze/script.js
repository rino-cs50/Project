

function game(){
var elem = document.getElementById("animate");
var x = 0;
var y = 0;
var z = 350;
var a = 0;
var id = setInterval(start,1)

function start(){
    
    if(a == 350) {
        // x = 0;
        y = 0;
        z = 350;
        a = 0;

    } else if(z == 0){
        x--;
        a++;
        elem.style.top = a + 'px';
        elem.style.top = x + 'px';

    } else if(y == 350){
        z--;
        elem.style.left = z + 'px';
        
    } else if(x == 350){
        y++;
        elem.style.top = y + 'px';
    
    } else{
        x++;
        elem.style.left = x + 'px';
        }
    }

}



function game1(){
    var elem = document.getElementById("animate1");
    var x = 50;
    var y = 50;
    var z = 300;
    var a = 50;
    var id = setInterval(start,5)
    
    function start(){
        
        if(a == 300) {
            x = 50;
            y = 50;
            z = 300;
            a = 50;
    
        } else if(z == 50){
            x--;
            a++;
            elem.style.left = a + 'px';
            elem.style.left = x + 'px';
    
        } else if(y == 300){
            z--;
            elem.style.top = z + 'px';
            
        } else if(x == 300){
            y++;
            elem.style.left = y + 'px';
        
        } else{
            x++;
            elem.style.top = x + 'px';
            }
        }
    
    }



function game2(){
    var elem = document.getElementById("animate2");
    var x = 100;
    var y = 100;
    var z = 250;
    var a = 100;
    var id = setInterval(start,1)
    
    function start(){
        
        if(a == 250) {
            x = 100;
            y = 100;
            z = 250;
            a = 100;
    
        } else if(z == 100){
            x--;
            a++;
            elem.style.top = a + 'px';
            elem.style.top = x + 'px';
    
        } else if(y == 250){
            z--;
            elem.style.left = z + 'px';
            
        } else if(x == 250){
            y++;
            elem.style.top = y + 'px';
        
        } else{
            x++;
            elem.style.left = x + 'px';
            }
        }
    
    }
    
   
        game();
        game1();
        game2();
  

// myMove = () => {
//     var elem = document.getElementById("animate");
//     var yAxisP = 0;
//     var xAxisN = 0;
//     var yAxisN = 350;
//     var xAxisP = 350;

//     var id = setInterval(frame, 1);
//     function frame(){
        
//         if(yAxisN == 0){
            
//             xAxisN++;
//             elem.style.left = xAxisN + 'px';
//             if(xAxisN == 350){
                
//                 xAxisP = 350;

            
//             }

//         } else if(xAxisP == 0){
//             xAxisN = 0;
//             yAxisN--;
//             elem.style.top = yAxisN + 'px';

//         } else if(yAxisP == 350){
            
//             xAxisP--;
//             elem.style.left = xAxisP + 'px';

//         } else if (xAxisN == 350){
            
//             yAxisP++;
//             elem.style.top = yAxisP + 'px';
        
//         } else {
            
//             xAxisN++;
//             elem.style.left = xAxisN + 'px';
//         }

//     }
// };
// myMove();








/*---- COORDINATES ------*/

// function showCoords(event) {
//     var x = event.clientX;
//     var y = event.clientY;
//     var coords = "X coords: " + x + ", Y coords: " + y;
//     document.getElementById("demo").innerHTML = coords;
//   }

//     showCoords();



    // function myMove() {
    //     var elem = document.getElementById("animate");   
    //     var pos = 0;
    //     var pos1 = 350
    //     var id = setInterval(frame, 10);
    //     function frame() {
    //       if (pos == 350) {
    //         pos1--; 
    //         elem.style.top = pos1 + 'px'; 
    //         elem.style.left = pos1 + 'px';
    //         if(pos1 == 0){
    //         pos = 0;
    //         pos1 = 350;
    //         }
    //       } else {
    //         pos++; 
    //         elem.style.top = pos + 'px'; 
    //         elem.style.left = pos + 'px'; 
    //       }
    //     }
    //   }


