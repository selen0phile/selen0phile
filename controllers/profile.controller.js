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
                var url='https://us1.locationiq.com/v1/reverse.php?key=pk.2c2132990ea7c2f3cb79d6cd71dea449&lat='+pos.coords.latitude+'&lon='+pos.coords.longitude+'&format=json';
                console.log(url);
                fetch(url)
                .then(response => response.json())
                .then(data => document.getElementById('location').value=data.display_name);
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