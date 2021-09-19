let zoomInText = () => {
    let str = document.querySelector(".heading").innerHTML;
    let chars = [...str];
    let newChars = chars.filter(char => char !== " ");
    let showOn = newChars.map(spanELE => `<span>${spanELE}</span>`);
    document.querySelector(".heading").innerHTML = showOn.join(" ");
}
zoomInText()
