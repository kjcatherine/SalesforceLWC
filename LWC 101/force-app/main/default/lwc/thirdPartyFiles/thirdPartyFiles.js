import { LightningElement } from 'lwc';
import MOMENT from '@salesforce/resourceUrl/moment'
import ANIMATE from '@salesforce/resourceUrl/animate'
import {loadScript, loadStyle} from 'lightning/platformResourceLoader'
export default class ThirdPartyFiles extends LightningElement {
    currentDate=''
    isLibLoaded = false
    renderedCallback(){ 
        if(this.isLibLoaded){ 
            return
        } else { 

            Promise.all([
                loadStyle(this, ANIMATE+'/animate/animate.min.css'),
                loadScript(this, MOMENT+'/moment/moment.min.js')
            ]).then(()=>{ 
                this.setDateOnScreen()
            }).catch(error=>{ 
                console.error(error)
            })
            this.isLibLoaded = true
        }
       
    }
    setDateOnScreen(){ 
        this.currentDate = moment().format('LLLL')
    }
}






// import { LightningElement } from 'lwc';
// import MOMENT from '@salesforce/resourceUrl/moment'
// import {loadScript} from 'lightning/platformResourceLoader'
// export default class ThirdPartyFiles extends LightningElement {
//     currentDate=''
//     //we always use this hook whenever we are loading a script or css so we can perform the ops inside
//     renderedCallback(){
    //we removed promise.all bacuse we are only loading one file
//         Promise.all([
//             loadScript(this, MOMENT+'/moment/momemt.min.js')
//         ]).then(() =>{
//             //success
//             this.setDateOnScreen()
//         }).catch(error =>{
//             console.error(error)
//         })
//     }

//     setDateOnScreen(){
//         //copied this method from the momentjs.com site under multiple locale support, 2nd to last
//         this.currentDate = moment().format('LLLL');
//     }

// }