public class JSONGenerator {
    public static string jsonGeneratorSample() {
        String strJson = '';
        
        for(Account accIterator : [SELECT Id, Name, Industry, Phone, Type From Account limit 5]) {
            try {
                // Create a JSONGenerator object
                System.JSONGenerator jsGen = JSON.createGenerator(true);
                // start object ({)
                jsGen.writeStartObject();
                jsGen.writeFieldName('Account');
                jsGen.writeStartObject();
                jsGen.writeStringField('Id', accIterator.Id);
                jsGen.writeStringField('Name', accIterator.Name);
                jsGen.writeStringField('Industry', accIterator.Industry);
                jsGen.writeStringField('Phone', accIterator.Phone);
                jsGen.writeStringField('Account Type', accIterator.Type);
                // end object (})
                jsGen.writeEndObject();
                jsGen.writeEndObject();
                strJson = jsGen.getAsString(); 
                String jsonData=jsGen.getAsString();
                System.debug(jsonData);
            }
            catch(Exception ex) {
                System.debug('Line number ====> '+ex.getLineNumber() + 'Exception Message =====> '+ex.getMessage());   
            }
        }
        if(!String.isBlank(strJson)) {
            return strJson;
        }
        else {
            return null;
        }
    }
}