//
//  script.js
//  
//
//  Created by Jake Smith on 6/28/26.
//

const button = document.querySelector("button");

button.addEventListener("mouseenter",()=>{

    button.style.transform="translateY(-5px) scale(1.03)";

});

button.addEventListener("mouseleave",()=>{

    button.style.transform="translateY(0px)";

});
