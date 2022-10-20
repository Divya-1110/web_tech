//step1:defin inteface/class

interface Employee{
    empId:number;
    empName:string;
    designation:string;
    doj:string;
    salary:number;
    phone:number;
    dept:{
        deptId:number,
        deptName:string
    };
}

//step2:consume REST API 
const webapi='https://reqres.in/api/users?page=1'
const empApi='http://127.0.0.1:9095/api/employees'
const searchApi='http://127.0.0.1:9095/api/employees/9876543210'

//step3:Fetch all data using async/await/promise
const fetchAllUsers= async(url:string): Promise<Employee[]>=>{
    const response=await fetch(url)
    const data:any = await response.json()
    console.log(data);
    return data;
}
//search id
const empsearch= async(url:string): Promise<Employee[]>=>{
    const response=await fetch(url)
    const data:any = await response.json()
    console.log(data);
    return data;
}



//step4:call asynchronous function
empsearch(searchApi);

//step4: Reference js file in html to see output in console
