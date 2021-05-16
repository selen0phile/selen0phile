class profile_view {
    constructor(context) {
        if(typeof context=='undefined') this.context={displayName:'',phoneNumber:'',gender:'',d:'',bg:'',location:''};
        else {
            this.context=context;
            console.log(context);
        }
    }
    get_view() {
        return `


        <div>
        <form>
            <label for="">Name</label>
            <input type="text" id="displayName" value="${this.context.displayName}"/>
            <label for="">Phone</label>
            <input type="text" id="phoneNumber" value="${this.context.phoneNumber}"/>
            <label for="">Gender</label>
            <input type="text" id="gender" value="${this.context.gender}"/>
            <label for="">Blood Group</label>
            <input type="text" id="bg" value="${this.context.bg}"/>
            <label for="">Location</label>
            <input class="" type="text" id="location" value="${this.context.location}"/>
            <a class="waves-effect waves-light btn" style="" onclick="router('profile','location')">Get Location</a>
            <br>
            <a class="waves-effect waves-light btn" onclick="router('profile','update')">Update</a>
        </form>
    </div>
    





`;
    }
}