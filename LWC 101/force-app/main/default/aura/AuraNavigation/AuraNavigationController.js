({
    onload : function(component) {
        var myPageref = component.get("v.pageReference")
        var id = myPageref.state.c__id
        component.set("v.id", id)
    }
})
