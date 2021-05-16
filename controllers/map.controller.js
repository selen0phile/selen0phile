class map_controller {
    constructor(context) {
        this.context=context
        const model = new map_model();
        model.read().then(model_data=>{
            const view = new map_view();
            const html = view.get_view();
            //render
            document.getElementById('map-view').innerHTML=html;
            function myMap() {
                var mapProp= {
                  center:new google.maps.LatLng(51.508742,-0.120850),
                  zoom:5,
            };
            var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
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