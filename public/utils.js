Object.prototype.changeText = function (selector, text) {
    this.querySelector(selector).innerText = text
}

function getValue(id) {
    return document.getElementById(id).value
}