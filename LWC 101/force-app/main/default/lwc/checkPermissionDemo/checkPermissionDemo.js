import { LightningElement } from 'lwc';
import hasViewAllData from '@salesforce/userPermission/ViewAllData'

export default class CheckPermissionDemo extends LightningElement {
    get hasViewAllDataAvailable(){
        return hasViewAllData
    }
}