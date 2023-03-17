({
    handleMessage : function(component, message) {

    },
    inputHandler : function(component, event){
        console.log(event.target.value)
        component.set("v.messageValue", event.target.value)
    },
    publishMessage: function(component){
        let msg = component.get("v,messageValue")
        let message = {
            lmsData:{
                value:msg
            }
        }
        component.find("SampleMessageChannel").publish(message)
    }
})
