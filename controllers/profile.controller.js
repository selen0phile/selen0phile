class profile_controller {
    constructor(context) {
        this.context=context
        const model = new profile_model();
        if(context=='update') {
            model.update(this.get_form_data());
        }
        else if(context=='location') {
            if (navigator.geolocation) navigator.geolocation.getCurrentPosition((pos)=>{
                const position=pos.coords.latitude+','+pos.coords.longitude;
                document.getElementById('location').value=position;
                fetch('http://api.positionstack.com/v1/reverse?access_key=cd6904b6484889c007c299fa33ab553b&query='+position)
                .then(response => response.json())
                .then(data => document.getElementById('location').value=data.data[0]['name']);
            },(err)=>{

            });
            return;
        }
        model.read().then(model_data=>{
            console.log(model_data);
            const view = new profile_view(model_data);
            const html = view.get_view();
            //render
            document.getElementById('profile-view').innerHTML=html;
        });
    }
    get_form_data() {
        let data={};
        const input_tags=document.getElementById('profile-view').getElementsByTagName('input');
        for(var i=0;i<input_tags.length;i++)
        data[input_tags[i].id]=input_tags[i].value;
        return data;
    }
}