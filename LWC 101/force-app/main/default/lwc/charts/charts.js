import { LightningElement } from 'lwc';
import chartJs from '@salesforce/resourceUrl/chartJs'
//To load a resource we need loadScript
import {loadScript} from 'lightning/platformResourceLoader'
export default class Charts extends LightningElement {
    isChartJsInitialized;
    chart;
    renderedCallback(){
        if(this.isChartJsInitialized){
            return;
        }
        loadScript(this, chartJs+'/chartJs/Chart.js').then(()=>{
            console.log('loaded successfully')
            this.isChartJsInitialized = true
            this.loadCharts()
        }).catch(error=>{
            console.error(error)
        })
    }
        loadCharts(){
            //There is an issue with chartjs whereby when it loads, it injects the css directly to the dom, we need to diable that
            window.Chart.platform.disableCSSInjection = true
            const canvas = document.createElement('canvas')
            //above creates a tag like <canvas></canvas>
            this.template.querySelector('div.chart').appendChild(canvas)
            const ctx = canvas.getContext('2d')
            this.chart = new window.Chart(ctx, this.config())
        }
        config(){
            return {
                type: 'bar',
                data: {
                  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                  datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    borderWidth: 1
                  }]
                },
                options: {
                  scales: {
                    y: {
                      beginAtZero: true
                    }
                  }
                }
              }
    }
}