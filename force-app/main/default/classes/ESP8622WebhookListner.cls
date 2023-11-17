@RestResource(urlMapping='/ESP8622WebhookListner')
global class ESP8622WebhookListner {
    @HttpGet
    global static void doGet() {
        RestContext.response.addHeader('Content-Type', 'application/json');
        String responseBody='';
        String tempReading = RestContext.request.params.get('temperature');
        TemperatureWrapperClass tempWrapObj = (TemperatureWrapperClass)system.JSON.deserialize(tempReading,TemperatureWrapperClass.class);
        System.debug(tempWrapObj.humidity);
        System.debug(tempWrapObj.temp);
        System.debug(tempWrapObj.heatIndex);
        
        Double Humidity = Double.valueOf(tempWrapObj.humidity);
        System.debug('Humidity Value'+Humidity);
        Double Temperature = Double.valueOf(tempWrapObj.temp);
        System.debug('Temperature Value'+Temperature);
        Double heatIndex = Double.valueOf(tempWrapObj.heatIndex);
        System.debug('Heat Index Value'+heatIndex);
        
        Temperature_Data__c temperatureRecord = new Temperature_Data__c();
        temperatureRecord.Celcius__c = Temperature;
        temperatureRecord.Humidity__c = Humidity;
        temperatureRecord.Heat_Index__c = heatIndex;
         
        Double tempLimit = double.valueOf(Label.Max_Temp_Send_Email);// custom label value
        
        Statistics__c statObj = new Statistics__c();
        if(Temperature>=tempLimit){
            temperatureRecord.Is_Critical__c = true;
            statObj.Last_Email_Send__c=Datetime.now();
            System.debug('StatObj:'+statObj);
            temperatureRecord.Critical_Temperature__c=Label.Max_Temp_Send_Email;
            responseBody+='Turn ON ';
        }
        try {
            System.debug(temperatureRecord);
            insert temperatureRecord;
            statObj.Related_Temperature_Record__c=temperatureRecord.Id;
            if(Temperature>=tempLimit){
                insert statObj;
                temperatureRecord.Statistics__c=statObj.Id;
                update temperatureRecord;
            }
            
            responseBody+='Record inserted Successfully';
            RestContext.response.responseBody = Blob.valueOf(responseBody);
        } catch (Exception ex) {
            //If the insertion fails, send error response
            System.debug(ex.getCause()+' '+ex.getLineNumber()+' '+ex.getLineNumber());
            RestContext.response.responseBody = Blob.valueOf('error');
        }
    }
}