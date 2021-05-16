class symptoms_view {
    constructor(context) {
        if(typeof context=='undefined') this.context={a:'',b:'',c:'',d:'',location:''};
        else {
            this.context=context;
            console.log(context);
        }
    }
    get_view() {
        return `


        <div>
        <form>
            <label for="">A</label>
            <input type="text" id="a" value="${this.context.a}"/>
            <label for="">B</label>
            <input type="text" id="b" value="${this.context.b}"/>
            <label for="">C</label>
            <input type="text" id="c" value="${this.context.c}"/>
            <label for="">D</label>
            <input type="text" id="d" value="${this.context.d}"/>
            <label for="">Location</label>
            <input type="text" id="location" value="${this.context.location}"/>
    
            <a class="waves-effect waves-light btn" onclick="router('symptoms','update')">Update</a>
        </form>
    </div>


`;
    }
}