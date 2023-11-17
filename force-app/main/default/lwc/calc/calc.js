import { LightningElement, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent'


export default class Calc extends LightningElement {
    currentResult;
    previous = [];
    showResult = false;

    firstNumber;
    secondNumber;

    numberChangeHandler(event) {
        const inputBoxName = event.target.name;
        if (inputBoxName === 'firstNumber') {
            this.firstNumber = event.target.value;
        } else if (inputBoxName === 'secondNumber') {
            this.secondNumber = event.target.value;
        }
    }

    add() {
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);
        if (this.checkAndConvertNum(firstN, secondN)) {
            const result = firstN + secondN;
            this.currentResult = 'Result of ' + firstN + '+' + secondN + ' is ' + result;
            this.previous.push(this.currentResult);
        }
    }

    sub() {
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);
        if (this.checkAndConvertNum(firstN, secondN)) {
            const result = firstN - secondN;
            this.currentResult = 'Result of ' + firstN + '-' + secondN + ' is ' + result;
            this.previous.push(this.currentResult);
        }
    }

    multiply() {
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);
        if (this.checkAndConvertNum(firstN, secondN)) {
            const result = firstN * secondN;
            this.currentResult = 'Result of ' + firstN + '*' + secondN + ' is ' + result;
            this.previous.push(this.currentResult);
        }
    }

    division() {
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);
        if (this.checkAndConvertNum(firstN, secondN)) {
            const result = firstN / secondN;
            this.currentResult = 'Result of ' + firstN + '/' + secondN + ' is ' + result;
            this.previous.push(this.currentResult);
        }
    }

    checkAndConvertNum(firstN, secondN) {
        if (!isNaN(firstN) && !isNaN(secondN)) {
            return true;
        } else {
            this.showToast();
            return false;
        }
    }

    Show(event) {
        this.showResult = event.target.checked;
    }

    showToast() {
        const toastEvent = new ShowToastEvent({
            title: 'Empty Field',
            message: "Please enter the number",
            variant: 'warning'
        })
        this.dispatchEvent(toastEvent);
    }
}