import { LightningElement, track } from 'lwc';

import getAllAcc from '@salesforce/apex/accManagerImperative.getAccount';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class AccManagerApexImperative extends LightningElement {
    @track n;
    @track accounts;
    //while making imerative calls we dont need to iterate over account.data we can simply iterate over accounts.

    get resReceived() {
        if (this.accounts) {
            return true;
        }
        else {
            return false;
        }
    }

    numOfAccHandler(event) {
        this.n = event.target.value;
    }

    getAccount() {
        // JSON Object And then geAllAcc method is going to return a promise which we need to handle using then and catch. The successful response we are going to handle in then.
        getAllAcc({ numberOfAccount: this.n }).then(response => {
            this.accounts=response;
            const e = new ShowToastEvent(
                {
                    title: 'Accounts Loaded Successfully',
                    message: this.n+" Accounts Fetched from Server",
                    variant: 'success'
                }
            );
            this.dispatchEvent(e);
        }).catch(error =>{
            console.log("Error",error.body.message);
            const e = new ShowToastEvent(
                {
                    title: 'Error',
                    message: error.body.message,
                    variant: 'error'
                }
            );
            this.dispatchEvent(e);
        })
    }
}