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
const primeCoordinate = 18000;
const reBrackets = /\[|\]/gm;
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
let peopleInLayer = [];
let listPeople = new Array();
