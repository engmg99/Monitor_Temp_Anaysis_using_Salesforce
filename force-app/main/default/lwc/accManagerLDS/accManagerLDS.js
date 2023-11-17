import { LightningElement,track, wire } from 'lwc';
import { createRecord, getRecord } from "lightning/uiRecordApi";
// importing lds from api module ie for creating record 
//also lds is written in user interface api so thats why importing and use create record method.

//getRecord method is a wire adapter so we've to use wire service also and it'll accept two params 1- record id 2- field to reterive

const fieldArray = ['Account.Name', 'Account.Phone', 'Account.Website'];

export default class AccManagerLDS extends LightningElement {
    @track accName;
    @track accPhone;
    @track accWebsite;
    @track recordId;

    //getRecord wire adapter retrieve a record from salesforce without the need of server-side controller
    @wire(getRecord, {recordId: '$recordId', fields: fieldArray})
    accountRecord;
    //$ means that the value is passes dynmaically. When the value changes, the wire service provision data and the component re-renders.

    /*we are using wire service to retrieve the data from server and I am passing my record ID dynamically. That means if the record ID will change in future, the wire service is going to go to the Salesforce and get the new data.Also passing the field array like the field that I want to retrieve and the response that I'll get from this wire service will be assigned in this accountRecord property.
    
    All the wire property are also similar to the track properties means they are also the reactive and private so we can use this account property to display the value of our Account Name, Account Phone and Account Website.*/

    accNameHandler(event) {
        this.accName = event.target.value;
    }
    accPhoneHandler(event) {
        this.accPhone = event.target.value;
    }
    accWebsiteHandler(event) {
        this.accWebsite = event.target.value;
    }
    createAcc() {
        const fields = { 'Name': this.accName, 'Phone': this.accPhone, 'Website': this.accWebsite };

        const recordInput = { apiName: 'Account', fields };
        // createRecord returns a promise
        createRecord(recordInput).then(res => {
            console.log('Account has been created: ', res.id);
            this.recordID = res.id;
        }).catch(error => {
            console.log('Error in creating Account: ', error.body.message);
        });
    }

    get getName() {
        if (this.accountRecord.data) {
            return this.accountRecord.data.fields.Name.value;
        }
            return undefined;
    }

    get getPhone() {
        if (this.accountRecord.data) {
            return this.accountRecord.data.fields.Phone.value;
        }
            return undefined;
    }

    get getURL() {
        if (this.accountRecord.data) {
            return this.accountRecord.data.fields.Website.value;
        }
            return undefined;
    }
}