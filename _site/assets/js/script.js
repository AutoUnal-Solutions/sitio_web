// index

const idxBtn = document.querySelector('.indexBtn');
const idx = document.querySelector('.index');
const overlayIdx = document.querySelector('.overlay-index'); 

idxBtn.addEventListener('click', () =>{
    idx.style.right = '0';
    overlayIdx.style.display = 'block';
})

overlayIdx.addEventListener('click', (e)=>{
    if(e.target == overlayIdx) {
        idx.style.right = '-500px';
        setTimeout(() => {
           overlayIdx.style.display = 'none';
        },50)
    }
})
