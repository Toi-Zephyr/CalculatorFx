var firstInput = 0;
var secondInput = 0;
var answerValue = 0;
var labelValue = 0;
var isCalculator = false;
var lastCal = 0;


function handleEqual(event) {
    // console.log(event);
    secondInput = labelValue;
    isCalculator = false;
    // answerValue = firstInput + secondInput;
    switch (lastCal) {
        case 1:
            answerValue = firstInput + secondInput;
            break;
        case 2:
            answerValue = firstInput - secondInput;
            break;
        case 3:
            answerValue = firstInput * secondInput;
            break;
        case 4:
            answerValue = firstInput / secondInput;
            break;
        default:
            answerValue = 000000;
    }

    labelValue = answerValue;
    //firstInput = answerValue;
    //secondInput = 0;

    displayLabel.setText(labelValue);
}

function handleClean(event) {
    // console.log(event);
    firstInput = 0;
    secondInput = 0;
    answerValue = 0;
    labelValue = 0;
    isCalculator = false;
    lastCal = 0;
    displayLabel.setText(labelValue);
}

function handlePlus(event) {
    if (!isCalculator) {
        firstInput = labelValue;
        labelValue = 0;
        isCalculator = true;
        lastCal = 1;
        displayLabel.setText(labelValue);
    }
    else {
        firstInput += labelValue;
        labelValue = 0;
        lastCal = 1;
        displayLabel.setText(labelValue);
    }
}

function handleSub(event) {
    if (!isCalculator) {
        firstInput = labelValue;
        labelValue = 0;
        isCalculator = true;
        lastCal = 2;
        displayLabel.setText(labelValue);
    }
    else {
        firstInput -= labelValue;
        labelValue = 0;
        lastCal = 2;
        displayLabel.setText(labelValue);
    }
}

function handleMul(event) {
    if (!isCalculator) {
        firstInput = labelValue;
        labelValue = 0;
        isCalculator = true;
        lastCal = 3;
        displayLabel.setText(labelValue);
    }
    else {
        firstInput *= labelValue;
        labelValue = 0;
        lastCal = 3;
        displayLabel.setText(labelValue);
    }
}

function handleDiv(event) {
    if (!isCalculator) {
        firstInput = labelValue;
        labelValue = 0;
        isCalculator = true;
        lastCal = 4;
        displayLabel.setText(labelValue);
    }
    else {
        firstInput /= labelValue;
        labelValue = 0;
        lastCal = 4;
        displayLabel.setText(labelValue);
    }
}

function handle1(event) {
    labelValue = labelValue * 10 + 1;
    displayLabel.setText(labelValue);
}

function handle2(event) {
    labelValue = labelValue * 10 + 2;
    displayLabel.setText(labelValue);
}

function handle3(event) {
    labelValue = labelValue * 10 + 3;
    displayLabel.setText(labelValue);
}

function handle4(event) {
    labelValue = labelValue * 10 + 4;
    displayLabel.setText(labelValue);
}

function handle5(event) {
    labelValue = labelValue * 10 + 5;
    displayLabel.setText(labelValue);
}

function handle6(event) {
    labelValue = labelValue * 10 + 6;
    displayLabel.setText(labelValue);
}

function handle7(event) {
    labelValue = labelValue * 10 + 7;
    displayLabel.setText(labelValue);
}

function handle8(event) {
    labelValue = labelValue * 10 + 8;
    displayLabel.setText(labelValue);
}

function handle9(event) {
    labelValue = labelValue * 10 + 9;
    displayLabel.setText(labelValue);
}

function handle0(event) {
    labelValue = labelValue * 10 + 0;
    displayLabel.setText(labelValue);
}