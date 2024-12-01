

const generalWrapper=document.querySelector('.generalWrapper');
generalWrapper.classList.add('.reduce');

// const allImages=document.querySelectorAll('img');
// allImages.forEach((image)=>{
//     image.classList.remove('scrollAnime');
//     image.classList.remove('scrollAnime2');
//     image.classList.remove('scrollAnime3');
// })

const observer=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add('showScrollAnime');
        }else{
            entry.target.classList.remove('showScrollAnime');
        }
    })
})


const elementsForScrollAnimation1=document.querySelectorAll('.scrollAnime');
elementsForScrollAnimation1.forEach((el)=>observer.observe(el));
const elementsForScrollAnimation2=document.querySelectorAll('.scrollAnime2');
elementsForScrollAnimation2.forEach(el=>observer.observe(el));
const elementsForScrollAnimation3=document.querySelectorAll('.scrollAnime3');
elementsForScrollAnimation3.forEach((el)=>observer.observe(el));