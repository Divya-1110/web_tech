
//step1:defin inteface/class

interface Employee{
    id:number;
    employee_name:string;
    employee_salary:string;
    employee_age:number;
    profile_img:string;
}

//step2:consume REST API 
const webApi='http://dummy.restapiexample.com/api/v1/employees'


//step3:Fetch all data using async/await/promise

const fetchAllEmployees = async(url:string): Promise<Employee[]>=>{
    const response=await fetch(url)
    const{data}:any = await response.json()
    console.log(data);
    return data;
}

const searchEmployees = async(url:string): Promise<Employee[]>=>{
    const response=await fetch(url)
    const{data}:any = await response.json()
    console.log(data);
    return data;
}
//step4:calll asynchronous function
fetchAllEmployees(webApi);
//step4: Reference js file in html to see output in console
