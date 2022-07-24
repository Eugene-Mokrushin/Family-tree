'use strcit';

const $mainCanvas = $('.tree-box-wrapper');
const $personDetails = $('.selectPerson');
const $newPicker = $('.new-picker');
const $buttonMenuToggle = $('#toggle-side-panel');
const $arrowMenu = $('#arrow-direction');
const $pannelMenu = $('.menu');
const $treeWrapper = $('.tree-box-wrapper');
const $nameTyped = $('#first-name');
const $surnameTyped = $('#surname');
const $saveFirstTime = $('.save');
const $addRelative = $('.addRelative');
let idElementClicked;
const primeCoordinate = 18000;
const reBrackets = /\[|\]/gm;
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
let currentPersonPicked;
let peopleInLayer = [];
let listPeople = new Array();


const initialCssRelativeDetails = {
    selectPersonWidth : +$('.selectPerson').css('width').slice(0, -2),
    selectPersonHeight : +$('.selectPerson').css('height').slice(0, -2),
    selectPersonTextHeight : +$('.relative__description').css('height').slice(0, -2),
    selectPersonImgHeight : +$('.selectPerson__photo').css('height').slice(0, -2),
    selectPersonMarginLeft : +$('.selectPerson').css('left').slice(0, -2),
    selectPersonMarginTop : +$('.selectPerson').css('top').slice(0, -2),
}