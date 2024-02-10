const wrong_btn = document.getElementById('avoid');
const right_btn = document.getElementById('correct_answer');
const valentines = document.getElementById('valentines');
const game_over = document.getElementById('test');
const boo_image_holder = document.getElementById('boo_image');
const wrong_msg_div = document.getElementById('wrong_choice');
const yay_div = document.getElementById('right_choice');


var boo_images = ["try_again.jpeg", "bfr.jpeg","-.-.JPG","cry_me_a_river.JPG","fight.JPG","fu.JPG","halp.JPG","sob.JPG","wtf.JPG"];

var boo_messages = ["Nuh-uh. Try again.", "Why are you clicking no?", "Wrong answer.", "Not quite right...", "Psttt you should click yes", "Bffr.", "Let's try again..."];

var yay_images = ["rizz.JPG", "saranghey.JPG", "muah.JPG", "luvu.JPG"];

var yay_dict = {
    "rizz.JPG": "hi bbg ;)",
    "saranghey.JPG": "hey sexy",
    "muah.JPG": "MUAAHHH",
    "luvu.JPG": "🫰🫰🫰🫰",
    // "heart.jpg": "🫰🫰🫰🫰",
}

var love_images = ["heart.JPG", "heart2.JPG", "heart3.JPG", "rizz.JPG", "saranghey.JPG", "muah.JPG", "luvu.JPG"];

var lives = 2;

var count = 1;

// move the button on mouseover
wrong_btn.addEventListener('mouseover', function () {
    wrong_btn.style.left = `${Math.floor(Math.random() * 200)}%`;
    wrong_btn.style.top = `${Math.ceil(Math.random() * 100)}%`;
});

// when no is clicked trigger the upset page
wrong_btn.addEventListener('click', function () {

    count += 1;
    var random_img = Math.floor(Math.random()*boo_images.length);
    var random_msg = Math.floor(Math.random()*boo_messages.length);
    
    document.getElementById("boo_msg").innerHTML = boo_messages[random_msg];
    
    if(count < 5){
        document.getElementById("redo").innerHTML = "Take " + count;
    }
    else if(count < 10){
        document.getElementById("redo").innerHTML = "🤨 Take " + Math.floor(Math.random() * 123);
        ;
    }
    else{
        document.getElementById("redo").innerHTML = "🤨🤨🤨...sus!!";
    }

    document.canvas.src="./images/" + boo_images[random_img];

    document.getElementById("boo_img").style.width = "80%";
    
    valentines.style.display = "none";
    yay_div.style.display = "none";
    wrong_msg_div.style.display = "flex";

})

// handle when yes is clicked
right_btn.addEventListener('click', function () {
    alert('noice')
    
    // var random_yay = Math.floor(Math.random()*love_images.length);

    // document.canvas_2.src="images/"+love_images[random_yay];
    var random_yay = Math.floor(Math.random()* 4);
    
    document.canvas_2.src="./images/"+yay_images[random_yay];

    // document.canvas_2.src="images/kiss.jpeg"
    
    document.getElementById("yay_img").style.width = "451px";
    
    document.getElementById("back").innerHTML = yay_dict[yay_images[random_yay]];

    valentines.style.display = "none";
    yay_div.style.display = "flex";
    wrong_msg_div.style.display = "none";
    
})

var redo =  document.getElementById('redo');

redo.addEventListener('click', function () {
    // location.href = "index.html";
    valentines.style.display = "flex";
    wrong_msg_div.style.display = "none";
    yay_div.style.display = "none";
})

var back =  document.getElementById('back');

back.addEventListener('click', function () {
    // location.href = "index.html";
    valentines.style.display = "flex";
    wrong_msg_div.style.display = "none";
    yay_div.style.display = "none";
})

// document.addEventListener('keypress', function easter_egg(e){
//     if(e.key === "Enter") {
//         // alert("easter egg here")
//         const user_input = prompt("You've found the easter egg! Now what's the password?");
//         if(user_input === "nate" || user_input === "Nate"){
//             // while(true){
//             //     nate();
//             // }
//         }   
//     }
// });

// function nate() {
//     let id = null;
//     const nut = document.getElementById("nut");   
//     nut.style.display = "block"; 
//     nut.style.top = "350px"; 
//     const heart = document.getElementById("heart");   
//     let pos = 0;
//     clearInterval(id);
//     id = setInterval(frame, 5);
//     function frame() {
//       if (pos == 0) {
//         clearInterval(id);
//       } else {
//         pos--; 
//         nut.style.top = pos + "px"; 
//         // nut.style.left = pos + "px"; 
//       }
//     }
//   }