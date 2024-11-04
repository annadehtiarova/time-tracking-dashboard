let data;

fetch('data.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); 
    })
    .then(fetchedData => {
        data = fetchedData; 
        console.log(data); 
    })
    .catch(error => {
        console.error('Error loading JSON:', error);
    });


const dailyBtn = document.getElementById('daily');
const weeklyBtn = document.getElementById('weekly');
const monthlyBtn = document.getElementById('monthly');

function updateDaily(){
    const cards = document.querySelectorAll('.card');
    
    cards.forEach((card, index) => {     
           const currentData = card.querySelector('.current');
           const previousData = card.querySelector('.previous');
            currentData.innerText = `${data[index].timeframes.daily.current}hrs`;
            previousData.innerText = `Last week - ${data[index].timeframes.daily.previous}hrs`;
        });
    
}
function updateWeekly(){
    const cards = document.querySelectorAll('.card');
    
    cards.forEach((card, index) => {     
           const currentData = card.querySelector('.current');
           const previousData = card.querySelector('.previous');
            currentData.innerText = `${data[index].timeframes.weekly.current}hrs`;
            previousData.innerText = `Last week - ${data[index].timeframes.weekly.previous}hrs`;
        });
    
}
function updateMonthly(){
    const cards = document.querySelectorAll('.card');
    
    cards.forEach((card, index) => {     
           const currentData = card.querySelector('.current');
           const previousData = card.querySelector('.previous');
            currentData.innerText = `${data[index].timeframes.monthly.current}hrs`;
            previousData.innerText = `Last week - ${data[index].timeframes.monthly.previous}hrs`;
        });
    
}


dailyBtn.addEventListener('click', function(){
    updateDaily();
    dailyBtn.classList.add('text-white');
    dailyBtn.classList.remove('text-blue-100');
    weeklyBtn.classList.remove('text-white');
    weeklyBtn.classList.add('text-blue-100');
    monthlyBtn.classList.remove('text-white');
    monthlyBtn.classList.add('text-blue-100');
    
})
weeklyBtn.addEventListener('click', function(){
    updateWeekly();
    weeklyBtn.classList.add('text-white');
    weeklyBtn.classList.remove('text-blue-100');
    dailyBtn.classList.remove('text-white');
    dailyBtn.classList.add('text-blue-100');
    monthlyBtn.classList.remove('text-white');
    monthlyBtn.classList.add('text-blue-100');
    
    
})
monthlyBtn.addEventListener('click', function(){
    updateMonthly();
    monthlyBtn.classList.add('text-white');
    monthlyBtn.classList.remove('text-blue-100');
    dailyBtn.classList.remove('text-white');
    dailyBtn.classList.add('text-blue-100');
    weeklyBtn.classList.remove('text-white');
    weeklyBtn.classList.add('text-blue-100');
    
})