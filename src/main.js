// let container=document.getElementById("container")
// container.style.height="75px"
// container.style.width="75px"
// container.style.backgroundColor="palevioletred"
// document.body.appendChild(container)

document.querySelector("button").onclick=function (){

    var box = document.createElement("div")
    box.style.height="75px"
    box.style.width="75px"
    box.style.backgroundColor=changeColor()
    container.appendChild(box)
    var br = document.createElement("br")
    container.appendChild(br)
      
}
    



function changeColor() {
    // Generate random values for RGB
    var r = Math.floor(Math.random() * 256); // Random between 0-255
    var g = Math.floor(Math.random() * 256); // Random between 0-255
    var b = Math.floor(Math.random() * 256); // Random between 0-255
    
    // Construct a color string in RGB format
    var color = 'rgb(' + r + ',' + g + ',' + b + ')';
    return color;
  }


// document.querySelector("button").onclick=function (){
//     var body = document.getElementById("body")
//     body.style.backgroundColor=changeColor()
    

// }


  
