import { LightningElement, wire } from 'lwc';
import {getNavItems} from 'lightning/uiAppsApi'
export default class GetNavItemsDemo extends LightningElement {
    @wire(getNavItems, {
        pageSize:30
    })
    navItemsHandler({data}){
        if(data){
            console.log(data)
        }
    }
}