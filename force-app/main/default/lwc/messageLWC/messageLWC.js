import { LightningElement, track, wire } from "lwc";
import messageDemo from "@salesforce/messageChannel/messageDemo__c"; // importing our cretaed demo msg channel
import {
  MessageContext,
  releaseMessageContext,
  createMessageContext,
  publish,
  subscribe,
  unsubscribe,
  APPLICATION_SCOPE
} from "lightning/messageService";

export default class MessageLwc extends LightningElement{
  @track messages=[]; // by default reactive but for array changes use track

  @wire(MessageContext) msgContext;

  sendHandler(){
    const inputElement=this.template.querySelector("lightning-input");
    if(inputElement){
      const msg= inputElement.value;
      this.messages.push({
        id: this.messages.length,
        value: msg,
        from: "LWC"
      });
      //publish the message
      const msgConstructor={
        message: msg
      };

      publish(this.msgContext,messageDemo,msgConstructor);

      inputElement.value="";
      //making input fiield blank
    }
  }


}