import { LightningElement } from 'lwc';

export default class PdfGenerationDemo extends LightningElement {
    imageUrl ='https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/atjl323lqdcdeizyxbnk'
    invoiceData={
        invoiceNo: '123',
        invoiceCreated: 'May 1 2023',
        invoiceDue: 'May 10 2023',
        companyName: 'Sparksuite, Inc.',
        address1: '12345 sunny road',
        address2: 'Sunnyville, CA 12345',
    }
    clientData={
        client:'Acme Corp',
        username:'John Doe',
        email:'john@example.com'
    }
    services=[
        {name:'Consultant fee', amount:1000.00},
        {name:'Website design', amount:300.00},
        {name:'Hosting (3 months)', amount:75.00}
    ]
    get totalAmount(){
        return this.services.reduce((total, service)=>{
            return total = total+service.amount
        }, 0)
    }
    pdfHandler(){
        let content = this.template.querySelector('.container')
        console.log(content.outerHTML)
    }
}