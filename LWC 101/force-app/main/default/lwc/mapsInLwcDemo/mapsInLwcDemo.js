import { LightningElement,wire } from 'lwc';
import getAccounts from '@salesforce/apex/MapControllerLwc.getAccounts'

export default class MapsInLwcDemo extends LightningElement {
    //To load the map we need the data, and to load te data we need an apex class
    @wire(getAccounts)
    wireHandler({data, error}){
        if(data){
            console.log(data)
        }
        if(error){
            console.error(error)
        }
    }
}