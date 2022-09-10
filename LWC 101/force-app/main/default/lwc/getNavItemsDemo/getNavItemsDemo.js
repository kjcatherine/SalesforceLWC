import { LightningElement, wire } from 'lwc';
import {getNavItem} from 'lightning/uiAppsApi'
export default class GetNavItemsDemo extends LightningElement {
    @wire(getNavItem, {
        pageSize:30
    })
    navItemsHandler({data}){
        if(data){
            console.log(data)
        }
    }
}