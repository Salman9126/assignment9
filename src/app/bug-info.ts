export class BugInfo {

    constructor(
        public first_name:string,
        public last_name:string,
        public email:string,
        public bug_found_date:any,
        public bug_found_time:any,
        public impact:string,
        public details:string
    )
    {
        this.first_name= first_name;
        this.last_name= last_name;
        this.email= email;
        this.bug_found_date= bug_found_date;
        this.bug_found_time= bug_found_time;
        this.impact= impact;
        this.details= details;        
    }
}

