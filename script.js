function realPic() {
  const id = Math.floor((Math.random() * 6 + 1) * 10000);
  console.log(id);
  return `https://whichfaceisreal.blob.core.windows.net/public/realimages/${id}.jpeg`;
}
const fakePic = "https://thispersondoesnotexist.com/";

const imgContainer = document.getElementById("images");
const resContainer = document.getElementById("result");
function draw() {
    resContainer.innerHTML="";
imgContainer.innerHTML="";

    const resetbtn=document.createElement("button");
    resetbtn.innerHTML="try again!"
resetbtn.onclick=draw

  const rnd = Math.random() > 0.5;
  const arr = [rnd, !rnd];

  for (const isReal of arr) {
    const img = document.createElement("img");
    img.src = isReal ? realPic() : fakePic;

    img.onclick = function () {
      if (isReal) {
        resContainer.innerHTML="correct"
      } else {
        resContainer.innerHTML=("incorrect")
      }
      
  resContainer.appendChild(resetbtn);
    };

    imgContainer.appendChild(img);
  }
}

draw();
