
const include_AZ = document.querySelector('.caps');
const include_az = document.querySelector('.smalls');
const include_09 = document.querySelector('.nums');
const include_syms = document.querySelector('.syms'); 
const length = document.querySelector('.length');

const options = document.querySelector('.options');
const display = document.querySelector('.display');
const btn = document.querySelector('.btn') ;

const chars_AZ = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const chars_az = 'abcdefghijklmnopqrstuvwxyz';
const chars_09 = '0123456789';
const chars_symbs = '!@#$%^&*()_+-=[]{}|;:",./<>?';


btn.addEventListener('click', buttonProcess);

function buttonProcess() {
    let pwd_chars = '';

    let pwdSize = length.value;

    if(include_AZ.checked){
        pwd_chars += chars_AZ
    };
    if(include_az.checked){
        pwd_chars += chars_az
    };
    if(include_09.checked){
        pwd_chars += chars_09
    };
    if(include_syms.checked){
        pwd_chars += chars_symbs
    };
    
    let pwd = generatePassword(pwd_chars, pwdSize);

    display.innerText = pwd;
};

function generatePassword(pwd_chars, _pwdSize){
    let pwd = '';
    for(let i = 0; i < _pwdSize; i++){
        pwd += pwd_chars[Math.floor(Math.random() * pwd_chars.length)]
    };
    return pwd;
};