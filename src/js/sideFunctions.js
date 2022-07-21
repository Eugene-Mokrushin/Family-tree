'use strcit';

// creates uniqueId
function uniqueId() {
    let newId = Math.floor(Math.random() * 100000)
        .toString()
        .split('')
        .map(x => String.fromCharCode(97 + parseInt(x)))
        .join('');
    return newId;
}


//populate localStorage
function updateLocalStorage(newData) {
    const data = newData
    const numberOfPeople = JSON.parse(localStorage.getItem('listPerson'))
        .replace(reBrackets, '')
        .split(',')
        .length + 1;

    localStorage.setItem(numberOfPeople, JSON.stringify(data))
    listPeople = []
    for (let i = 0; i < numberOfPeople; i++) {
        listPeople.push(i)
    }
}


// find how many people in one layer
function peopleInLayerCalc(layerToFind) {
    const storageData = localStorage.getItem('family-tree');
    let counter = 0;
    storageData.forEach(person => {
        const personJson = JSON.parse(person);
        personJson.layer === layerToFind ? counter++ : null;
    });
    return counter;
}


//populate localStorage(list) on load 
function checkLocalStorageForListOfPeople() {
    if (localStorage.getItem('listPerson')) listPeople = localStorage.getItem('listPerson')
    else localStorage.setItem('listPerson', JSON.stringify(listPeople))
}


//animation opene - close element
function newPickerToggle(element, event, growDirection = 1, additionalOfsetX = 0, additionalOfsetY = 0) {
    let scalePicker = growDirection === 1 ? 0 : 1;
    element.css({
        left: event.offsetX + additionalOfsetX - primeCoordinate,
        top: event.offsetY + additionalOfsetY - primeCoordinate
    })
    const intervalPicker = setInterval(() => {
        growDirection === 1 ? scalePicker += 0.05 : scalePicker -= 0.05
        if (scalePicker > 1 || scalePicker < 0) { clearInterval(intervalPicker) }
        $newPicker.css({
            'transform': `scale(${scalePicker})`
        });
    }, 10)
}


//first time click 
function firstTime() {
    return listPeople.split(reBrackets, '').length === 0;
}