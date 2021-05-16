class map_controller {
    constructor(context) {
        this.context=context
        const model = new map_model();
        model.read().then(model_data=>{
            const view = new map_view();
            const html = view.get_view();
            //render
            document.getElementById('map-view').innerHTML=html;
            setTimeout(view.initMap(),2000);
        });
    }
    get_form_data() {
        let data=[];
        const input_tags=document.getElementById('map-view').getElementsByTagName('input');
        for(var i=0;i<input_tags.length;i++)
        data[input_tags[i].id]=input_tags[i].value;
        return data;
    }
}