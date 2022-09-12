import { LightningElement, wire } from 'lwc';
import {getNavItems} from 'lightning/uiAppsApi'
export default class GetNavItemsDemo extends LightningElement {
    @wire(getNavItems, {
        //specify this to not get all the nav items, from developer name in console data
        navItemNames:['standard-Account'], 
        pageSize:30
    })
    navItemsHandler({data}){
        if(data){
            console.log(data)
        }
    }
}