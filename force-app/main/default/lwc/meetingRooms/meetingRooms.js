import { LightningElement } from 'lwc';

export default class MeetingRooms extends LightningElement {
    roomInfo=[
        {roomName:'A01', roomCapacity:'12'},
        {roomName:'A21', roomCapacity:'6'},
        {roomName:'A03', roomCapacity:'5'},
        {roomName:'B01', roomCapacity:'8'},  // parent components
        {roomName:'B02', roomCapacity:'10'},
        {roomName:'B03', roomCapacity:'14'},
        {roomName:'C01', roomCapacity:'4'},
    ];
}