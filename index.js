
for(let i=1;i<=24;i++){
    var element = document.querySelector(`body > div > div:nth-child(2) > div> div > div:nth-child(${i})`);
    element.style.transform = 'rotate(' + 15*i + 'deg)';
    element.style.transformOrigin = 'left';
}
