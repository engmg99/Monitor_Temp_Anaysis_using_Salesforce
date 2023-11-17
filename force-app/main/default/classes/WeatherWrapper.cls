public with sharing class WeatherWrapper {
  public cls_location location;
  public cls_current current;
  public cls_forecast forecast;
  class cls_location {
    public String name; //Patiala
    public String region; //Punjab
    public String country; //India
    public Double lat; //30.33
    public Double lon; //76.4
    public String tz_id; //Asia/Kolkata
    public Decimal localtime_epoch; //1678276216
    public String localtime; //2023-03-08 17:20
  }
  class cls_current {
    public Decimal last_updated_epoch; //1678275900
    public String last_updated; //2023-03-08 17:15
    public Double temp_c; //30.6
    public Double temp_f; //87.1
    public Decimal is_day; //1
    public cls_condition condition;
    public Double wind_mph; //3.6
    public Double wind_kph; //5.8
    public Decimal wind_degree; //309
    public String wind_dir; //NW
    public Decimal pressure_mb; //1012
    public Double pressure_in; //29.89
    public Decimal precip_mm; //0
    public Decimal precip_in; //0
    public Decimal humidity; //11
    public Decimal cloud; //46
    public Double feelslike_c; //28.4
    public Double feelslike_f; //83.1
    public Decimal vis_km; //10
    public Decimal vis_miles; //6
    public Decimal uv; //8
    public Double gust_mph; //4.7
    public Double gust_kph; //7.6
  }
  class cls_condition {
    public String text; //Clear
    public String icon; ////cdn.weatherapi.com/weather/64x64/night/113.png
    public Decimal code; //1000
  }
  class cls_forecast {
    public cls_forecastday[] forecastday;
  }
  class  cls_forecastday {
    public Decimal date_epoch; //1678233600
    public cls_day day;
    public cls_astro astro;
    public cls_hour[] hour;
  }
  class cls_day {
    public Double maxtemp_c; //34.3
    public Double maxtemp_f; //93.7
    public Double mintemp_c; //14.6
    public Double mintemp_f; //58.3
    public Double avgtemp_c; //23.3
    public Double avgtemp_f; //73.9
    public Double maxwind_mph; //5.8
    public Double maxwind_kph; //9.4
    public Decimal totalprecip_mm; //0
    public Decimal totalprecip_in; //0
    public Decimal totalsnow_cm; //0
    public Decimal avgvis_km; //10
    public Decimal avgvis_miles; //6
    public Decimal avghumidity; //21
    public Decimal daily_will_it_rain; //0
    public Decimal daily_chance_of_rain; //0
    public Decimal daily_will_it_snow; //0
    public Decimal daily_chance_of_snow; //0
    public cls_condition condition;
    public Decimal uv; //6
  }
  class cls_astro {
    public String sunrise; //06:43 AM
    public String sunset; //06:27 PM
    public String moonrise; //07:17 PM
    public String moonset; //07:16 AM
    public String moon_phase; //Waning Gibbous
    public String moon_illumination; //100
    public Decimal is_moon_up; //1
    public Decimal is_sun_up; //0
  }
  class cls_hour {
    public Decimal time_epoch; //1678213800
    public Double temp_c; //17.1
    public Double temp_f; //62.8
    public Decimal is_day; //0
    public cls_condition condition;
    public Double wind_mph; //1.3
    public Double wind_kph; //2.2
    public Decimal wind_degree; //308
    public String wind_dir; //NW
    public Decimal pressure_mb; //1016
    public Double pressure_in; //29.99
    public Decimal precip_mm; //0
    public Decimal precip_in; //0
    public Decimal humidity; //30
    public Decimal cloud; //3
    public Double feelslike_c; //17.1
    public Double feelslike_f; //62.8
    public Double windchill_c; //17.1
    public Double windchill_f; //62.8
    public Double heatindex_c; //17.1
    public Double heatindex_f; //62.8
    public Double dewpoint_c; //-0.6
    public Double dewpoint_f; //30.9
    public Decimal will_it_rain; //0
    public Decimal chance_of_rain; //0
    public Decimal will_it_snow; //0
    public Decimal chance_of_snow; //0
    public Decimal vis_km; //10
    public Decimal vis_miles; //6
    public Double gust_mph; //2.9
    public Double gust_kph; //4.7
    public Decimal uv; //1
  }
}