const point = document.querySelectorAll(".pic-1");

point.forEach((point)=> {

point.addEventListener('mouseover', () => {
   point.style.backgroundColor = 'gray';
})
point.addEventListener("mouseout",() => {
   point.style.backgroundColor = '';
})
})