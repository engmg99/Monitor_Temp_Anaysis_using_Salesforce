import { LightningElement, track, wire } from 'lwc';
import getPicklistValues from '@salesforce/apex/ExpenseTrackerClass.getQuantityPicklist';

export default class ExpenseTracker extends LightningElement {

    @track
    quantityPicklist;

    @wire(getPicklistValues)
    derivePicklistValues({ err, data }) {
        if (data) {
            this.quantityPicklist = [{ value: '', label: '--None--' }];
            data.forEach(e => {
                const temp = {};
                temp.label = e;
                temp.value = e;
                this.quantityPicklist.push(temp);
            });
        }
        else if (err) {
            console.log(err);
        }
    }

    connectedCallback() {
        console.log('Inside Connected Callback');
    }

    handleQuantityUnit(event) {
        this.dispatchEvent(
            new CustomEvent('select', {
                detail: { recordId: event.target.value }
            })
        );
        console.log(event.target.value);
    }
}