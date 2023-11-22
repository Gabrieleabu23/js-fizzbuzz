
for(let i=1;i<=100;i++){
    const boxes= document.createElement("square");
    boxes.classList.add("square","d-flex","justify-content-center","align-items-center");
    document.querySelector(".row").append(boxes);
    if(i % 15 === 0){
        boxes.innerHTML="fizzbuzz";
        boxes.classList.add("bg_square_15");
    }else if(i % 3 === 0){
        boxes.innerHTML="fizz";
        boxes.classList.add("bg_square_3");
    }else if(i % 5 === 0){
        boxes.innerHTML="buzz";
        boxes.classList.add("bg_square_5");
    }
    else{
        boxes.append(i);
    }
    // document.querySelector(".container").append=boxes;
    // console.log(i);
}
