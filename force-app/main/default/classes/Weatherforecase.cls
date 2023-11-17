public with sharing class Weatherforecase {
  public static Integer myValue = 0; //Class Member variable
  public static String myString = ''; //Class Member variable

  @AuraEnabled
  public static Integer getCalculatedValue() {
    myValue = myValue + 10;
    return myValue;
  }

  @AuraEnabled
  public static String makeWeatherApiRequest(String city) {
    String weatherBody = null;
    try {
      HttpRequest req = new HttpRequest();
      req.setEndpoint(
        'http://api.weatherapi.com/v1/forecast.json?key=c8c1a1066ac9460ca0184509201610&q=' +
        city +
        '&days=4'
      );
      req.setMethod('GET');
      Http h = new Http();
      HttpResponse res = h.send(req);
      weatherBody = res.getBody();
    } catch (Exception e) {
      throw new AuraHandledException(e.getMessage());
    }
    return weatherBody;
  }
}