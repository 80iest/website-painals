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

//searchbar
const searchbar = document.getElementById('searchbar');
searchbar.addEventListener('keyup', e => {
    let currentValue = e.target.value.toLowerCase();
    let vege = document.querySelectorAll('h4.vegename');
    vege.forEach(veges =>{
        if(veges.textContent.toLowerCase().includes(currentValue)){
            veges.parentNode.parentNode.parentNode.style.display = 'block';
        }else{
            veges.parentNode.parentNode.parentNode.style.display = 'none';

        }
    })
});

//autocomplete words sa searchbar
let keyWords = [
    'Bitter Melon',
    'Artichoke',
    'Baguio Beans',
    'Banana Heart',
    'Basil',
    'Bok Choy',
    'Broccoli',
    'Capsicum',
    'Carrot',
    'Cauliflower',
    'Cherry Tomato',
    'Corn',
    'Cucumber',
    'Garlic',
    'Ginger',
    'Green Cabbage',
    'Iceberg Lettuce',
    'Jalapeno',
    'Kangkong',
    'Leek',
    'Mung Beans',
    'Okra',
    'Onions',
    'Peanut',
    'Peas',
    'Potato',
    'Radish',
    'Red Cabbage',
    'Romaine Lettuce',
    'Soya',
    'Spinach',
    'Spring Onion',
    'Squash',
    'Sweet Potato',
    'Eggplant',
    'Tomato',
  


];

const resultBox = document.querySelector('.result-box');
const inputBox = document.getElementById('searchbar');

inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = keyWords.filter((keyword)=>{
           return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result)
    }
    display(result);

    if(!result.length){
        resultBox.innerHTML = '';
    }
}

//para mo display ang potaenang result
function display(result){
    const content = result.map((list)=>{
        return "<li onclick=selectInput(this)>" + list + "</li>";
    });

    resultBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInput(list){
    inputBox.value = list.innerHTML;
    resultBox.innerHTML = '';
}
