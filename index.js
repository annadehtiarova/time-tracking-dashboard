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
        updateWeekly();
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
            previousData.innerText = `Yesterday - ${data[index].timeframes.daily.previous}hrs`;
        });

        dailyBtn.classList.add('text-white');
        dailyBtn.classList.remove('text-blue-100');
        weeklyBtn.classList.remove('text-white');
        weeklyBtn.classList.add('text-blue-100');
        monthlyBtn.classList.remove('text-white');
        monthlyBtn.classList.add('text-blue-100');
        
    
}

function updateWeekly(){
    const cards = document.querySelectorAll('.card');
    
    cards.forEach((card, index) => {     
           const currentData = card.querySelector('.current');
           const previousData = card.querySelector('.previous');
            currentData.innerText = `${data[index].timeframes.weekly.current}hrs`;
            previousData.innerText = `Last week - ${data[index].timeframes.weekly.previous}hrs`;
        });

    weeklyBtn.classList.add('text-white');
    weeklyBtn.classList.remove('text-blue-100');
    dailyBtn.classList.remove('text-white');
    dailyBtn.classList.add('text-blue-100');
    monthlyBtn.classList.remove('text-white');
    monthlyBtn.classList.add('text-blue-100');
    
    
}
function updateMonthly(){
    const cards = document.querySelectorAll('.card');
    
    cards.forEach((card, index) => {     
           const currentData = card.querySelector('.current');
           const previousData = card.querySelector('.previous');
            currentData.innerText = `${data[index].timeframes.monthly.current}hrs`;
            previousData.innerText = `Last month - ${data[index].timeframes.monthly.previous}hrs`;
        });

    monthlyBtn.classList.add('text-white');
    monthlyBtn.classList.remove('text-blue-100');
    dailyBtn.classList.remove('text-white');
    dailyBtn.classList.add('text-blue-100');
    weeklyBtn.classList.remove('text-white');
    weeklyBtn.classList.add('text-blue-100');
    
}



dailyBtn.addEventListener('click', function(){
    updateDaily();
    
})
weeklyBtn.addEventListener('click', function(){
    updateWeekly();
    
})
monthlyBtn.addEventListener('click', function(){
    updateMonthly();
    
})


// Improvements
/*
function updateCards(timeframe) {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach((card, index) => {     
        const currentData = card.querySelector('.current');
        const previousData = card.querySelector('.previous');
        currentData.innerText = `${data[index].timeframes[timeframe].current}hrs`;
        previousData.innerText = `Last ${timeframe === 'daily' ? 'day' : timeframe === 'weekly' ? 'week' : 'month'} - ${data[index].timeframes[timeframe].previous}hrs`;
    });

    updateButtonStyles(timeframe);
}

function updateButtonStyles(activeTimeframe) {
    const buttons = {
        daily: dailyBtn,
        weekly: weeklyBtn,
        monthly: monthlyBtn
    };

    Object.keys(buttons).forEach(key => {
        const button = buttons[key];
        if (key === activeTimeframe) {
            button.classList.add('text-white');
            button.classList.remove('text-blue-100');
        } else {
            button.classList.remove('text-white');
            button.classList.add('text-blue-100');
        }
    });
}

// Event listeners for buttons
dailyBtn.addEventListener('click', function() {
    updateCards('daily');
});

weeklyBtn.addEventListener('click', function() {
    updateCards('weekly');
});

monthlyBtn.addEventListener('click', function() {
    updateCards('monthly');
});

*/

