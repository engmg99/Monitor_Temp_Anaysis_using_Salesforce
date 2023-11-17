import { LightningElement,track } from 'lwc';

export default class PublicMethodParent extends LightningElement {
    @track value;

    selectCheckBox(){
        // now we are calling child component element but which element for that we've to user query selector to get the elemnt

        const elem= this.template.querySelector('c-public-method-child');
        // querySelector allow us to select elememt from our markup 

        const m =elem.selectCheckBox(this.value);// calling child method with this value and printing it to the console
        console.log(m);
    }

    inputChange(event){
        this.value=event.target.value;
    }
}