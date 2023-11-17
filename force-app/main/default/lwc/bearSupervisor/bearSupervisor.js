import { LightningElement, api, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
// Import Bear object fields
import SUPERVISOR_FIELD from '@salesforce/schema/Bear__c.Supervisor__c';
//We import the Bear__c.Supervisor__c field via a schema import instead of using a hard-coded string like we did previously in the bear location component. The major benefit of this approach is that it ensures referential integrity.
const bearFields = [SUPERVISOR_FIELD];
export default class BearSupervisor extends LightningElement {
	@api recordId; // Bear Id
	@wire(getRecord, { recordId: '$recordId', fields: SUPERVISOR_FIELD })
	bear;
	
	get supervisorId() {
		return getFieldValue(this.bear.data, SUPERVISOR_FIELD);
	}
}