import { LightningElement, wire } from 'lwc';
import getAllAcc from '@salesforce/apex/accManager.getAccount';

export default class AccManagerApex extends LightningElement {
    /*@wire once we wire this method it's going to send you a response from server with the list of account.
We want to assign that to a property called "Accounts".*/

    @wire(getAllAcc)
    accounts;

    get resReceived()
    {
        if(this.accounts)
        {
            return true;
        }
        else{
            return false;
        }
    }
}