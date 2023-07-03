import { LightningElement, api } from "lwc";
export default class LwcBuilderDemo extends LightningElement {
	@api title;
	@api show;
	@api recordId;
	@api objectApiName;
}