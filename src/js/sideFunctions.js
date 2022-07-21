'use strcit';

//populate localStorage
function updateLocalStorage(newData) {
    const data = newData
    const numberOfPeople = localStorage.getItem('listPerson')
        .replace(reBrackets, '')
        .split(',')
        .length + 1;
    localStorage.setItem(numberOfPeople - 1, JSON.stringify(data))
    listPeople = []
    for (let i = 1; i < numberOfPeople; i++) {
        listPeople.push(i)
    }
    localStorage.setItem('listPerson', JSON.stringify(listPeople))
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
    if (localStorage.getItem('listPerson')) {
        listPeople = localStorage.getItem('listPerson')

        listPeople = listPeople
            .replace(reBrackets, '')
            .split(',');
    }
    else localStorage.setItem('listPerson', JSON.stringify(listPeople))
}


//animation opene - close element
function newPickerToggle(element, event, growDirection = 1, additionalOfsetX = 0, additionalOfsetY = 0, changeCSS = true, changeOffset = true) {
    let scalePicker = growDirection === 1 ? 0 : 1;
    const offSX = (changeOffset) ? event.offsetX : 0;
    const offSY = (changeOffset) ? event.offsetY : 0;
    console.log(offSX)
    if (element.attr('data-active') != 'active') {
        if (changeCSS) {
            element.css({
                left: offSX + additionalOfsetX - primeCoordinate,
                top: offSY + additionalOfsetY - primeCoordinate
            })
        }
        const intervalPicker = setInterval(() => {
            growDirection === 1 ? scalePicker += 0.05 : scalePicker -= 0.05
            if (scalePicker > 1 || scalePicker < 0) { clearInterval(intervalPicker) }
            element.css({
                'transform': `scale(${scalePicker})`
            });
        }, 10)
        element.attr('data-active', 'active');
        console.log('I am here')
    }
}


//first time click 
function firstTime() {
    return listPeople[0] == '';
}


// creating first person on tree
function firstPersonCreate(element, e) {
    const geneder = $saveFirstTime.attr('data-gender');
    element.attr('data-active', 'not-active')
    newPickerToggle(element, e, -1, -150, -150, false);
    const firstPerson = new NewFamilyMember($nameTyped.val(), $surnameTyped.val(), geneder, 0, '', 'https://img.freepik.com/premium-photo/cute-capybara-farm-is-eating_361141-840.jpg?w=200');
    firstPerson.addPerson()
    updateLocalStorage(firstPerson.generatObjSave())
}

//recreate what was already done from local storage
function recreateLocalStorage() {
    listPeople.forEach(element => {
        let nodePerson = JSON.parse(localStorage.getItem(element))
        if (nodePerson != null) {
            let person = new NewFamilyMember(
                nodePerson.firstName,
                nodePerson.secondName,
                nodePerson.gender,
                nodePerson.layer,
                nodePerson.connections,
                nodePerson.photoLink,
                nodePerson.personDescription,
                nodePerson.upid);
            person.addPerson()
        }
    });
}


//disables scrolling
function disableScroll() {
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        window.onscroll = function () {
            window.scrollTo(scrollLeft, scrollTop);
        };
}


//opens table of maybe new nodes
function chooseToAddNewRelative(e) {
    $personDetails.css('transform', 'scale(0)');
    $personDetails.attr('data-active', 'not-active');

    const jqElemTarget = $(`#${e.currentTarget.id}`)
    const elemTargetX = +jqElemTarget.css('left').slice(0, -2);
    const elemTargetY = +jqElemTarget.css('top').slice(0, -2);
    newPickerToggle($addRelative, e, 1, jqElemTarget.position().left + 250 + primeCoordinate, jqElemTarget.position().top + primeCoordinate, true, false);
}

//opens selected person details
function seePersonDetails(e) {
    $addRelative.css('transform', 'scale(0)');
    $addRelative.attr('data-active', 'not-active');

    const jqElemTarget = $(`#${e.currentTarget.id}`);
    const elemTargetX = +jqElemTarget.css('left').slice(0, -2);
    const elemTargetY = +jqElemTarget.css('top').slice(0, -2);
    newPickerToggle($personDetails, e, 1, jqElemTarget.position().left + 250 + primeCoordinate, jqElemTarget.position().top + primeCoordinate - 170, true, false);
}