import { LightningElement, api, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
//getRecord allow us to use the LDS to retrieve records without having to write Apex. getFieldValue helper function to retrieve field values.
// Set Bear object fields
const NAME_FIELD = 'Bear__c.Name';
const LOCATION_LATITUDE_FIELD = 'Bear__c.Location__Latitude__s';
const LOCATION_LONGITUDE_FIELD = 'Bear__c.Location__Longitude__s';
const bearFields = [
	NAME_FIELD,
	LOCATION_LATITUDE_FIELD,
	LOCATION_LONGITUDE_FIELD
];
//list of hard-coded field names
export default class BearLocation extends LightningElement {
    @api recordId;
    //recordId property decorated with @api automatically receives the current record id.
  name;
  mapMarkers = [];
  //We use an @wire decorator on the loadBear function to fetch data and errors then pass them to the function. @wire is configured to call the getRecord adapter function with some parameters. Those parameters are the record id and the list of record fields that we wish to retrieve. Thanks to the @wire decorator, loadBear is automatically called when the component loads or when the record id changes.
  @wire(getRecord, { recordId: '$recordId', fields: bearFields })
  loadBear({ data,error }) { //wire function
    if (error) {
      // TODO: handle error
    } else if (data) {
      // Get Bear data
      this.name =  getFieldValue(data, NAME_FIELD);
      const Latitude = getFieldValue(data, LOCATION_LATITUDE_FIELD);
      const Longitude = getFieldValue(data, LOCATION_LONGITUDE_FIELD);
      // Transform bear data into map markers
      this.mapMarkers = [{
        location: { Latitude, Longitude },
        title: this.name,
        description: `Coords: ${Latitude}, ${Longitude}`
        }];
    }
  }
  
  get cardTitle() {
    return (this.name) ? `${this.name}'s location` : 'Bear location';
  }
}