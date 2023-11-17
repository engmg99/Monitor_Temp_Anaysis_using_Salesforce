import { LightningElement,track} from 'lwc';

import NAME_FIELD from '@salesforce/schema/Account.Name'; // hard referencing
import PHN_FIELD from '@salesforce/schema/Account.Phone';
import URL_FIELD from '@salesforce/schema/Account.Website';

export default class AccManagerLDSRecordForm extends LightningElement {
    @track recordId;
    fieldArr=[NAME_FIELD,PHN_FIELD,URL_FIELD];

    handleSuccess(event){
        this.recordId = event.detail.id;
    }
}