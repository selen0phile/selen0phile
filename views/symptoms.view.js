class profile_view {
    constructor(context) {
        this.context=context;
    }
    get_view() {
        return `


        <div>
        <form>
            <label for="">Name</label>
            <input type="text" id="displayName" value="${this.context.displayName}"/>
            <label for="">Phone</label>
            <input type="text" id="phoneNumber" value="${this.context.phoneNumber}"/>
            <a class="waves-effect waves-light btn" onclick="router('profile','update')">Update</a>
        </form>
    </div>
    





`;
    }
}