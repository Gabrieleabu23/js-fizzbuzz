
for(let i=1;i<=100;i++){
    const boxes= document.createElement("square");
    boxes.classList.add("square","d-flex","justify-content-center","align-items-center");
    boxes.append(i);
    document.querySelector(".row").append(boxes);
    if(i % 15 === 0){
        boxes.innerHTML="fizzbuzz";
        boxes.style.background="#f0466f";
    }else if(i % 3 === 0){
        boxes.innerHTML="fizz";
        boxes.style.background="#0cd6a1";
    }else if(i % 5 === 0){
        boxes.innerHTML="buzz";
        boxes.style.background="#ffd166";
    }
    // document.querySelector(".container").append=boxes;
    console.log(i);
}
