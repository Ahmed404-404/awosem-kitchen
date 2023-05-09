let dishs = document.querySelectorAll(".food-dish")
let cards = document.querySelectorAll(".card")
let goLeftBtn =document.querySelector(".left")
let goRightBtn =document.querySelector(".right")
let container = document.querySelector(".container")

let dishsContainer = document.querySelector(".food-dishs-container")
let headText = document.querySelector(".text-content h3")
let thinTitle = document.querySelector(".text-content h1 span")
let title = document.querySelector(".text-content h1 .heading")
let rate = document.querySelector(".rate h2")
let chef = document.querySelector(".overview .text-content h3")
// console.log(container)

let tl = anime.timeline({
    easing: 'easeOutExpo',
    duration: 750
});
let tl2 = anime.timeline({
    easing: 'easeOutExpo',
    duration: 750
});
animation()
tl2
.add({
    targets : ".loading h2",
    translateX: "700%",
},"-=1750")
.add({
    targets : ".loading h3",
    translateX: "-700%",
},"-=1750")
.add({
    targets : ".loading h2",
    translateX: 0,
})
.add({
    targets : ".loading h3",
    translateX: 0,
})
.add({
    targets : ".counter",
    innerHTML: [0, 100],
    round : 1,
    duration : 2000
})
.add({
    targets : ".loading h2",
    translateY: -500,
})
.add({
    targets : ".loading",
    borderRadius: " 0 0 50%",
    height : 0
})

dishs.forEach( (ele,i) => ele.setAttribute("style",`--degree:${i * (360 / dishs.length)}deg`))

restAnimation()
let dish1 =  {
    rotate : 40,
    headText : "#1 Most loved dish",
    thinTitle : "LOTEK",
    title : "PERKEDEL",
    rate : "4.9",
    chef : "Chef Feny",
}
let dish2 =  {
    rotate : -50,
    headText : "#2 second loved dish",
    thinTitle : "LOT",
    title : "PEcEDEsL",
    rate : "4.8",
    chef : "Chef khaled",
}
let dish3 =  {
    rotate : -140,
    headText : "#3 threed loved dish",
    thinTitle : "TEK",
    title : "vevfDEL",
    rate : "4.3",
    chef : "Chef adel",
}
let dish4 =  {
    rotate : -230,
    headText : "#4 forth loved dish",
    thinTitle : "kote",
    title : "fEhjisgL",
    rate : "4.6",
    chef : "Chef Ahmed",
}
let dishsArr = [ dish1, dish2, dish3, dish4]

cards.forEach((ele,i)=>{
    ele.addEventListener("click",()=>{
        for(let i = 0; cards.length > i; i++){
            cards[i].classList.remove("active")
        }
        ele.classList.add("active")
        restAnimation()
        updateData(i)
    })
})

let index = 0
goLeftBtn.addEventListener("click",()=>{
    cards.forEach((ele,i)=>{
        if(ele.classList.contains("active")){
            index = i
        }
        if(index > 0){
            ele.classList.remove("active")
        }
    })
    
    restAnimation()
    cards[index - 1].classList.add("active")
    if(index > 0){
        updateData(index - 1)
    }
    container.scrollLeft -= 120
})

goRightBtn.addEventListener("click",()=>{
    cards.forEach((ele,i)=>{
        if(ele.classList.contains("active")){
            index = i
        }
        if(index < 3){
            ele.classList.remove("active")
        }
    })
    
    restAnimation()
    cards[index + 1].classList.add("active")
    if(index < 4){
        updateData(index + 1)
    }
    container.scrollLeft += 120
})



function updateData(i){
    dishsContainer.style.transform  = `translate(-50%,-50%) rotate(${dishsArr[i].rotate}deg)`
    headText.textContent = dishsArr[i].headText
    thinTitle.textContent = dishsArr[i].thinTitle
    title.textContent = dishsArr[i].title
    rate.textContent = dishsArr[i].rate
    chef.textContent = dishsArr[i].chef

    // console.log(dishsArr[i].rotate)
}



function animation(){
    tl
    .add({
        targets : ".overview",
        translateX: 500,
    })
    .add({
        targets: headText,
        translateX: -200,
    },"-=750")
    .add({
        targets: thinTitle,
        translateX: 300,
    },'-=750')
    .add({
        targets: ".heading",
        translateY: 70,
    },'-=750')
    .add({
        targets: "button",
        translateY: 70,
    },'-=750')
    .add({
        targets: rate,
        translateX: 100,
    },'-=750')
    .add({
        targets: ".overview .text-content",
        translateX: -500,
    },'-=750')
    
}
function restAnimation(){
  
    tl
    .add({
        targets : ".overview",
        translateX: 0,
    })
    .add({
        targets: headText,
        translateX: -0,
    },'-=750')
    .add({
        targets: thinTitle,
        translateX: 0,
    },'-=750')
    .add({
        targets: ".heading",
        translateY: 0,
    },'-=750')
    .add({
        targets: "button",
        translateY: 0,
    })
    .add({
        targets: rate,
        translateX: 0,
    },'-=750')
    .add({
        targets: ".overview .text-content",
        translateX: 0,
    },'-=750')
    
}