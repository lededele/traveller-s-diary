const appear = document.getElementById("blog").addEventListener("click", ()=>{

    document.getElementById("blog1").style.display = "block";
    document.getElementById("first").style.display = "none";
    document.getElementById("second").style.display = "none";

});

function loadTiktok() {
    const newVideo = document.createElement("div");

    document.getElementById("blog1").appendChild(newVideo);
    newVideo.className("newest");
    
}