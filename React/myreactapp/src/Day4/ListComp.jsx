function listcomp(){
    const empName = ["John", "Smith", "David", "Michael", "Sarah"];
    const emp =[
        {empID: 1 , 
         empName: "John",
        },
        {empID: 2 ,
         empName: "Smith",
        },
        {empID: 3 ,
         empName: "David",
        },
        {empID: 4 ,
         empName: "Michael",
        },
        {empID: 5 ,
         empName: "Sarah",
        }
    ]

    const empList = emp.map((emp) => <p>{emp.empID}. {emp.empName}</p>);
    return(
       <div>
       <h2>Employees List Rendering</h2>
         {empList}
       </div>
    )
}

export default listcomp;