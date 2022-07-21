'use strcit';

const $newPicker = $('.new-picker');
const $buttonMenuToggle = $('#toggle-side-panel');
const $arrowMenu = $('#arrow-direction');
const $pannelMenu = $('.menu');
const $treeWrapper = $('.tree-box-wrapper');
const $nameTyped = $('#first-name');
const $surnameTyped = $('#surname');
const $saveFirstTime = $('.save');
let $person;
const primeCoordinate = 18000;
const reBrackets = /\[|\]/gm;
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
let peopleInLayer = [];
let listPeople = new Array();


