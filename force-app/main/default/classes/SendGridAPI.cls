public class SendGridAPI {
    public static void sendEmail(String to, String sender){
        try{
            String API_KEY='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';
            String body='';
            HttpRequest req = new HttpRequest();  
            req.setEndpoint('https://api.sendgrid.com/v3/mail/send');
            req.setMethod('POST');
            req.setHeader('Content-Type', 'application/json');
            req.setHeader('authorization','Bearer '+API_KEY);
            
            
            System.JSONGenerator gen = JSON.createGenerator(true);
            gen.writeStartObject();
            
            gen.writeFieldName('personalizations');
            gen.writeStartArray();
            gen.writeStartObject();
            gen.writeFieldName('to');
            gen.writeStartArray();
            gen.writeStartObject();
            gen.writeStringField('email', to);
            gen.writeStringField('name', 'John Doe');
            gen.writeEndObject();
            gen.writeEndArray();
            
            gen.writeStringField('subject', 'Hello, World!');
            gen.writeEndObject();
            gen.writeEndArray();
            
            gen.writeFieldName('content');
            gen.writeStartArray();
            gen.writeStartObject();
            gen.writeStringField('type', 'text');
            gen.writeStringField('value', 'From SalesForce');
            gen.writeEndObject();
            gen.writeEndArray();
            
            
            /*gen.writeFieldName('dynamic_template_data');
            gen.writeStartObject();
            gen.writeStringField('verb', '');
            gen.writeStringField('adjective', '');
            gen.writeStringField('noun', '');
            gen.writeStringField('currentDayofWeek', '');
            gen.writeEndObject();
            gen.writeStringField('subject', 'Hello, World!');
            gen.writeEndObject();
            gen.writeEndArray();*/
            
            gen.writeFieldName('from');
            gen.writeStartObject();
            gen.writeStringField('email', sender);
            gen.writeStringField('name', 'John Doe');
            gen.writeEndObject();
            
            gen.writeFieldName('reply_to');
            gen.writeStartObject();
            gen.writeStringField('email', sender);
            gen.writeStringField('name', 'John Doe');
            gen.writeEndObject();
            
            //gen.writeStringField('template_id','d-f68bf6e475a74eddb91ae5d73645efdf');
            
            gen.writeEndObject();
            
            String jsonData=gen.getAsString();
            req.setBody(jsonData);
            
            System.debug(jsonData);
            
            Http http = new Http();
            HttpResponse res = http.send(req);
            System.debug(res);
            
        }catch(Exception e){
            System.debug('Exception is: '+e);
        }
    }
    //SendGridAPI.sendEmail('john.doe@example.com','noreply@johndoe.com');
}