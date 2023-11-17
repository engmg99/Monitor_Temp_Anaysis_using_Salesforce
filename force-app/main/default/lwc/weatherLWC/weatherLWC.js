import { LightningElement, track } from 'lwc';
import getCalculatedValue from '@salesforce/apex/Weatherforecase.getCalculatedValue'
import makeWeatherApiRequest from '@salesforce/apex/Weatherforecase.makeWeatherApiRequest'
import { ShowToastEvent } from 'lightning/platformShowToastEvent'
export default class WeatherLWC extends LightningElement {
    @track city = '';
    @track weatherData;
    showWeatherInfo = false;
    showSpinner = false;

    onCityChange(event) {
        this.city = event.target.value;
    }

    getWeatherData() {
        this.showSpinner = true;
        if (this.city != undefined && this.city.trim() != '') {
            makeWeatherApiRequest({ city: this.city.trim() }).then(res => {
                this.showSpinner = false;
                this.city = '';
                this.weatherData = JSON.parse(res);
                console.log("Response", this.weatherData);
                if (!this.weatherData.error) {
                    this.showWeatherInfo = true;
                    const toastEvent = new ShowToastEvent({
                        title: 'Success',
                        message: "Weather Data fetched successfully",
                        variant: 'success'
                    })
                    this.dispatchEvent(toastEvent);
                } else {
                    this.showWeatherInfo = false;
                    const toastEvent = new ShowToastEvent({
                        title: 'Information',
                        message: this.weatherData.error.message,
                        variant: 'info'
                    })
                    this.dispatchEvent(toastEvent);
                }
            }).catch(err => {
                console.log("Error", err);
                this.showSpinner = false;
                this.showWeatherInfo = false;
                const toastEvent = new ShowToastEvent({
                    title: 'Error',
                    message: "Oops! Something went wrong.",
                    variant: 'error'
                })
                this.dispatchEvent(toastEvent);
            })
        } else {
            this.showSpinner = false;
            this.showWeatherInfo = false;
            const toastEvent = new ShowToastEvent({
                title: 'Empty Field',
                message: "Please enter the city name",
                variant: 'warning'
            })
            this.dispatchEvent(toastEvent);
        }
    }

    get getLocationName() {
        return this.weatherData.location.name + ', ' + this.weatherData.location.region + ', ' + this.weatherData.location.country;
    }
}