function updateText(message) {
    let alert = document.getElementsByClassName('alert-success')[0];
    alert.innerHTML = message;
}

function updateColor(pickedColor) {
    let alert = document.getElementsByClassName('alert-success')[0];
    alert.style.color = pickedColor;
}

function changeWeight(isBold) {
    let alert = document.getElementsByClassName('alert-success')[0];
    if(isBold) {
        alert.style.fontWeight = 'bold';
    }
    else{
        alert.style.fontWeight = 'normal';
    }
}

function changeStyle(isItalic) {
    let alert = document.getElementsByClassName('alert-success')[0];
    if(isItalic) {
        alert.style.fontStyle = 'italic';
    }
    else {
        alert.style.fontStyle = 'normal';
    }
}

function changeDecoration(isUnderline) {
    let alert = document.getElementsByClassName('alert-success')[0];
    if(isUnderline) {
        alert.style.textDecoration = 'underline';
    }
    else {
        alert.style.textDecoration = 'none';
    }
}

function restoreDefault() {
    document.getElementById('message').value = "";
    updateText("This text will be changed immediately when typing new text.");
    updateColor('#155724');
    changeWeight(false);
    changeStyle(false);
    changeDecoration(false);
}

