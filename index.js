const wrong_btn = document.getElementById('avoid');
const right_btn = document.getElementById('correct_answer');
const valentines = document.getElementById('valentines');
const game_over = document.getElementById('test');
const boo_image_holder = document.getElementById('boo_image');
const wrong_msg_div = document.getElementById('wrong_choice');
const yay_div = document.getElementById('right_choice');


var boo_images = ["try_again.jpeg", "bfr.jpeg","-.-.jpg","cry_me_a_river.jpg","fight.jpg","fu.jpg","halp.jpg","sob.jpg","wtf.jpg"];

var boo_messages = ["Nuh-uh. Try again.", "Why are you clicking no?", "Wrong answer.", "Not quite right...", "Psttt you should click yes", "Bffr.", "Let's try again..."];

// var yay_dict = {
//     "rizz.jpg": "u come here often? ;)",
//     ""
// }

var love_images = ["heart.jpg", "heart2.jpg", "heart3.jpg", "rizz.jpg", "saranghey.jpg", "muah.jpg", "luvu.jpg"];

var lives = 2;

var count = 1;

// move the button on mouseover
wrong_btn.addEventListener('mouseover', function () {
    wrong_btn.style.left = `${Math.floor(Math.random() * 200)}%`;
    wrong_btn.style.top = `${Math.ceil(Math.random() * 100)}%`;
});

// when no is clicked trigger the upset page
wrong_btn.addEventListener('click', function () {

    console.log(count)
    console.log(lives)
    // if(lives == 0){
    //     // game over
    //     alert("GAME OVER")
    //     game_over.style.display = "flex";
    //     valentines.style.display = "none";
    // }
    // else{

    // alert('y u choose no >:(')
    lives -= 1;
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

    document.canvas.src="images/"+boo_images[random_img];

    document.getElementById("boo_img").style.width = "80%";

    valentines.style.display = "none";
    // yay_div.style.display = "none";
    
    // valentines.style.visibility = "hidden";
    wrong_msg_div.style.display = "flex";
    // wrong_msg_div.style.visibility = "visible";
    // yay_div.style.display = "flex";
    // yay_div.style.visibility = "visible";

    // }
})

// handle when yes is clicked
right_btn.addEventListener('click', function () {
    alert('nice')

    // var random_yay = Math.floor(Math.random()*love_images.length);
    // // var random_msg = Math.floor(Math.random()*love_messages.length);
    
    // // document.getElementById("boo_msg").innerHTML = boo_messages[random_msg];
    
    // // document.getElementById("redo").innerHTML = "Take " + count;
    
    // document.canvas.src="images/"+love_images[random_yay];
    
    // document.getElementById("boo_img").style.width = "80%";
    
    // // valentines.style.display = "none";
    // valentines.style.visibility = "hidden";
    // // wrong_msg_div.style.display = "none";
    // wrong_msg_div.style.visibility = "hidden";
    // // yay_div.style.display = "flex";
    // yay_div.style.visibility = "visible";
    
})

var redo =  document.getElementById('redo');

redo.addEventListener('click', function () {
    // location.href = "index.html";
    valentines.style.display = "flex";
    wrong_msg_div.style.display = "none";
    // yay_div.style.display = "none";

    // valentines.style.visibility = "visible";
    // wrong_msg_div.style.display = "none";
    // wrong_msg_div.style.visibility = "hidden";
    // yay_div.style.display = "flex";
    // yay_div.style.visibility = "hidden";
})

document.addEventListener('keypress', function easter_egg(e){
    if(e.key === "Enter") {
        alert("easter egg here")
    }
});
