public class LightingComponent {
  public static void u(String city)
  {
      HttpRequest req = new HttpRequest();
      req.setEndpoint('http://api.weatherapi.com/v1/forecast.json?key=c8c1a1066ac9460ca0184509201610&q='+city+'&days=4');
      req.setMethod('GET');
      Http h = new Http();
      HttpResponse res = h.send(req);
      String b=res.getBody();
      
      String n,t;
      JSONParser j = JSON.createParser(b);
           while(j.nextToken()!= null) 
           {
               if(j.getCurrentToken() == JSONToken.FIELD_NAME)
               {
                   j.nextValue();
                   if(j.getCurrentName()=='name')
                   {
                       System.debug(j.getText());
                   }
                   else if(j.getCurrentName()=='temp_c')
                   {
                       system.debug(j.getText());
                   }  
              }
  }
}
}