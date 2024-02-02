const wrong_btn = document.getElementById('avoid');
const right_btn = document.getElementById('correct_answer');
const valentines = document.getElementById('valentines');
const game_over = document.getElementById('test');

var lives = 2

wrong_btn.addEventListener('mouseover', function () {
    wrong_btn.style.left = `${Math.floor(Math.random() * 200)}%`;
    wrong_btn.style.top = `${Math.ceil(Math.random() * 100)}%`;
});

wrong_btn.addEventListener('click', function () {
    console.log(lives)
    if(lives == 0){
        // game over
        alert("GAME OVER")
        game_over.style.display = "block";
        valentines.style.display = "none";
    }
    else{
        alert('y u choose no >:(')
        lives -= 1;
    }
})


right_btn.addEventListener('click', function () {
    alert('nice')
})


