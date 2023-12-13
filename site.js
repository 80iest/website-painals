// dis for popup card sht
// it actually fuckin works i wanna cry

let previewContainer = document.querySelector('.products-preview');
let previewBox = previewContainer.querySelectorAll('.preview');

// menu category popup
document.querySelectorAll('.detail-wrapper .detail-card').forEach(detailCard =>{
    detailCard.onclick = () =>{
        previewContainer.style.display = 'flex';
        let name = detailCard.getAttribute('data-name');
        previewBox.forEach(preview =>{
           let target = preview.getAttribute('data-target');
            if(name == target){
                preview.classList.add('active');
            }
        });
    };
});

//recommended popup
document.querySelectorAll('.highlight-wrapper .highlight-card').forEach(detailCard =>{
    detailCard.onclick = () =>{
        previewContainer.style.display = 'flex';
        let name = detailCard.getAttribute('data-name');
        previewBox.forEach(preview =>{
           let target = preview.getAttribute('data-target');
            if(name == target){
                preview.classList.add('active');
            }
        });
    };
});

//para mo close and pop up
previewBox.forEach(close =>{
    close.querySelector('.fa-times').onclick = () =>{
        close.classList.remove('active');
        previewContainer.style.display = 'none';
    };
})

