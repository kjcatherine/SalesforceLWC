import { LightningElement, wire } from 'lwc';
import getOpportunities from '@salesforce/apex/OpportunityController.getOpportunities'
export default class ChartsDemo extends LightningElement {
    @wire(getOpportunities)
    opportunityHandler({data, error}){
        if(data){
            console.log(data)
        }
        if(error){
            console.error(error)
        }
    }
}