let likesTexst, dislikesTexst;

function changeBackground(color)
    {
        document.getElementById("main").style.backgroundColor = `rgb(${color/2}, ${color}, ${color/3})`;
    }

function makeBorderBlue()
    {
        document.getElementById("page").style.borderColor = "blue";
    }

function makeBorderGreen()
    {
        document.getElementById("page").style.borderColor = "green";
    }

function makeBorderYellow()
    {
        document.getElementById("page").style.borderColor = "yellow";
    }

document.getElementById('likes').onmouseenter = function() {
        likesTexst=this.textContent;
        this.innerHTML = "&#127822; &#127828; &#9917; &#127952; &#127936; &#129461; &#127928; &#128021 &#128665; &#128250;";
    };
    
document.getElementById('likes').onmouseleave = function() {
        this.innerHTML = likesTexst;
    };
    
document.getElementById('dislikes').onmouseenter = function() {
        dislikesTexst=this.textContent;
        this.innerHTML = "&#129324; &#128545; &#128555 &#128008; &#129326; &#128580;";
    };
    
document.getElementById('dislikes').onmouseleave = function() {
        this.innerHTML = dislikesTexst;
    };