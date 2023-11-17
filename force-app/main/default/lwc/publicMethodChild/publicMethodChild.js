import { LightningElement, track,api} from 'lwc';

export default class PublicMethodChild extends LightningElement {
    @track value = ['option1'];

    options = [
        { label: 'Ross', value: 'option1' },
        { label: 'Rachel', value: 'option2' },
        { label: 'Red', value: 'option3' },
        { label: 'Blue', value: 'option4' },
        { label: 'Green', value: 'option5' }
    ];

    @api
    selectCheckBox(i) {
        const selectedCB = this.options.finding(checkBox=>{
            console.log(checkBox.value)
            return i===checkBox.value;
        })
        console.log('CB'+selectedCB);
        
        if(selectedCB){
            this.value=selectedCB.value;
            return 'Successfully Checked';
        }
    
        return 'No Checkbox Found';
        
    }


}