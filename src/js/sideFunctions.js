'use strcit';

//populate localStorage
function updateLocalStorage(newData) {
    const data = newData
    const numberOfPeople = localStorage.getItem('listPerson')
        .replace(reBrackets, '')
        .split(',');

    listPeople = [];
    console.log(localStorage.getItem('listPerson')
        .replace(reBrackets, '')
        .split(','))
    console.log(numberOfPeople)
    // for (let i = 1; i <= numberOfPeople + 1; i++) {
    //     listPeople.push(i)
    // }

    localStorage.setItem(numberOfPeople[-1], JSON.stringify(data))
    localStorage.setItem('listPerson', JSON.stringify(numberOfPeople))
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
    newPickerToggle($addRelative, e, 1, jqElemTarget.position().left + 250 + primeCoordinate, jqElemTarget.position().top + primeCoordinate, true, false);
}

//opens selected person details
function seePersonDetails(e) {
    $addRelative.css('transform', 'scale(0)');
    $addRelative.attr('data-active', 'not-active');

    const jqElemTarget = $(`#${e.currentTarget.id}`);
    newPickerToggle($personDetails, e, 1, jqElemTarget.position().left + 250 + primeCoordinate, jqElemTarget.position().top + primeCoordinate - 170, true, false);
}

function zoom(e) {
    let scrollDirection = e.originalEvent.deltaY
    let imageHeightWidth = +$('.person__image').css('height').slice(0, -2);
    let fontSizeNames = +$('.person-initials').css('fontSize').slice(0, -2);
    let personBlockHeight = +$('.person').css('height').slice(0, -2);
    let personBlockWidth = +$('.person').css('width').slice(0, -2);
    let selectPersonWidth = +$('.selectPerson').css('width').slice(0, -2);
    let selectPersonHeight = +$('.selectPerson').css('height').slice(0, -2);
    let selectPersonTextHeight = +$('.relative__description').css('height').slice(0, -2);
    let selectPersonImgHeight = +$('.selectPerson__photo').css('height').slice(0, -2);
    let selectPersonMarginLeft = +$('.selectPerson').css('left').slice(0, -2);
    let selectPersonMarginTop = +$('.selectPerson').css('top').slice(0, -2);


    $('.person__image').css({
        'height': imageHeightWidth - 10 * (scrollDirection / 100),
        'width': imageHeightWidth - 10 * (scrollDirection / 100)
    })
    $('.person-initials').css({
        'fontSize': fontSizeNames - 1 * (scrollDirection / 100),
        'paddingTop': fontSizeNames - 1 * (scrollDirection / 100)
    })
    $('.person').css({
        'height': personBlockHeight - 13 * (scrollDirection / 100),
        'width': personBlockWidth - 10 * (scrollDirection / 100)
    })

    if (selectPersonHeight > 300) {
        $('.selectPerson').css({
            'height': selectPersonHeight - 30 * (scrollDirection / 100),
            'width': selectPersonWidth - 20 * (scrollDirection / 100),
            'left': selectPersonMarginLeft - 12.5 * (scrollDirection / 100),
            'top': selectPersonMarginTop + 10 * (scrollDirection / 100)
        })
    } else {
        $personDetails.css('transform', 'scale(0)');
        $personDetails.attr('data-active', 'not-active');
    }
    $('.relative__description').css({
        'height': selectPersonTextHeight - 16.5 * (scrollDirection / 100)
    })

    $('.selectPerson__photo').css({
        'height': selectPersonImgHeight - 10 * (scrollDirection / 100)
    })

    // $addRelative.css('transform', 'scale(0)');
    // $addRelative.attr('data-active', 'not-active');
    // $personDetails.css('transform', 'scale(0)');
    // $personDetails.attr('data-active', 'not-active');
}

function createNewPerson(e) {
    const whomeToAddData = e.target.dataset.relative;

    let i
    listPeople.forEach(element => {
        const nodePersonData = JSON.parse(localStorage.getItem(parseInt(element)))
        if (nodePersonData.upid === idElementClicked) {

            const newPerson = new NewFamilyMember(
                whomeToAddData + 'of' + nodePersonData.firstName,
                '',
                whomeToAddData === 'mother' || whomeToAddData === 'daugther' ? 'female' : 'male',
                nodePersonData.layer + whomeToAddData === 'son' || whomeToAddData === 'daugther' ? -1 : 1,
                '',
                ''
            )
            newPerson.addPerson()
            updateLocalStorage(newPerson.generatObjSave());

            return
        }
    });



    return
}