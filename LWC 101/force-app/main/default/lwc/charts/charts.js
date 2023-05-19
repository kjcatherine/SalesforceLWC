import { LightningElement, api } from 'lwc';
import chartJs from '@salesforce/resourceUrl/chartJs'
//To load a resource we need loadScript
import {loadScript} from 'lightning/platformResourceLoader'
export default class Charts extends LightningElement {
    isChartJsInitialized;
    chart;

    @api type
    @api chartHeading
    @api chartData
    @api chartLabels

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
                type: this.type,
                data: {
                  labels: this.chartLabels ? this.chartLabels : [],
                  datasets: [{
                    label: this.chartHeading,
                    data: this.chartData ? this.chartData : [],
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)'
                      ],
                    borderWidth: 1
                  }]
                },
                options: {
                  responsive:true,
                  legend:{
                    position:'right'
                  },
                  animation:{
                    animateScale:true,
                    animateRotate:true
                  }
                }
              }
    }
}