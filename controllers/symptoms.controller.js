class symptoms_controller {
    constructor(context) {
        /*
        this.context=context
        const model = new symptoms_model();
        if(context=='update') {
            model.update(this.get_form_data());
        }
        model.read().then(model_data=>{
            console.log(model_data);
            const view = new symptoms_view(model_data);
            const html = view.get_view();
            //render
            document.getElementById('symptoms-view').innerHTML=html;
        });
        */
       document.getElementById('symptoms-view').innerHTML='<iframe src="https://symptomate.com/covid19/checkup/#0-99990"></frame>';
    }
    get_form_data() {
        let data={};
        const input_tags=document.getElementById('symptoms-view').getElementsByTagName('input');
        for(var i=0;i<input_tags.length;i++)
        data[input_tags[i].id]=input_tags[i].value;
        return data;
    }
}