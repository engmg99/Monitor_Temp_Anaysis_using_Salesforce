import { LightningElement,track } from 'lwc';

export default class AccManagerLDSForms extends LightningElement {
    @track Id;
    successHandler(event){
        this.Id = event.detail.id;
    }
    call(event)
    {
        window.alert('Account Created Successfully');
    }
}