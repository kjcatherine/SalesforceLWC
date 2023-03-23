import { LightningElement } from 'lwc';
import USER_IMAGE from '@salesforce/resourceUrl/user_image'
import USER_SVG from '@salesforce/resourceUrl/user_svg'

export default class StaticImages extends LightningElement {
    userImage = USER_IMAGE
    userSvg = USER_SVG
}