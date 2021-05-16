class profile_controller {
    constructor(context) {
        this.context=context
        const model = new profile_model();
        if(context=='update') {
            model.update(this.get_form_data());
        }
        const view = new profile_view(model.read());
        const html = view.get_view();
        //render
        document.getElementById('profile-view').innerHTML=html;
    }
    get_form_data() {
        let data=[];
        const input_tags=document.getElementById('profile-view').getElementsByTagName('input');
        for(var i=0;i<input_tags.length;i++)
        data[input_tags[i].id]=input_tags[i].value;
        return data;
    }
}