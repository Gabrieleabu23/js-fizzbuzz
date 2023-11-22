let boxes= document.createElement("square");
for(let i=1;i<=100;i++){
    let boxes= document.createElement("div");
    boxes.classList.add("square");
    document.querySelector("div.row").append(boxes);
    boxes.append(i);
    boxes.classList.add("position-absolute","bottom-0","start-0")
    if(i % 3 === 0){
        boxes.style.background="#0cd6a1";
        if(i % 15 === 0){
            boxes.style.background="#f0466f";
        }
    }else if(i % 5 === 0){
        boxes.style.background="#ffd166";
    }
    // document.querySelector(".container").append=boxes;
    console.log(i);
}
