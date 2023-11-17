import { LightningElement,api } from 'lwc';

export default class NewInputConcept extends LightningElement {

    @api emailTemplate;
    @api uN;
    inputHandler(event){
        this.emailTemplate=event.target.value;
        console.log(this.emailTemplate);
    }

    
    get getValue(){
        this.uN = this.template.querySelector('lightning-input');
        this.uN.addEventListner('blur',(e)=>{
            console.log(e);
        },true)
        return 1;
    }
}