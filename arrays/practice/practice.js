const data = [
  {
    department: 'Sales',
    region: 'North',
    employees: [
      {
        id: 1,
        name: 'Alice',
        age: 25,
        salary: 3000,
        sales: [
          { month: 'January', amount: 5000 },
          { month: 'February', amount: 4000 },
          { month: 'March', amount: 6000 }
        ]
      },
      {
        id: 2,
        name: 'Bob',
        age: 30,
        salary: 4000,
        sales: [
          { month: 'January', amount: 7000 },
          { month: 'February', amount: 3000 },
          { month: 'March', amount: 8000 }
        ]
      }
    ]
  },

  {
    department: 'HR',
    region: 'South',
    employees: [
      {
        id: 3,
        name: 'Charlie',
        age: 28,
        salary: 3500,
        sales: []
      },
      {
        id: 4,
        name: 'David',
        age: 35,
        salary: 4500,
        sales: []
      }
    ]
  },

  {
    department: 'IT',
    region: 'East',
    employees: [
      {
        id: 5,
        name: 'Eve',
        age: 27,
        salary: 3800,
        sales: [
          { month: 'January', amount: 9000 },
          { month: 'March', amount: 7500 }
        ]
      },
      {
        id: 6,
        name: 'Frank',
        age: 32,
        salary: 4200,
        sales: [
          { month: 'February', amount: 6800 },
          { month: 'March', amount: 7100 }
        ]
      }
    ]
  }
]

//Retrieve all employees working in the Sales department.

const employeesWorkWithSalesDepartment = data.filter(
  employee => employee.department === 'Sales'
)
// console.log(employeesWorkWithSalesDepartment)

// Get a list of employees whose salary is greater than 4000.

const employeeGreaterThanSalary = data
  .flatMap(item => item.employees)
  .filter(item => item.salary === 4000)

// console.log(employeeGreaterThanSalary)

//Find all employees who are under 30 years old.

const employeeWithHighAge = data
  .flatMap(item => item.employees)
  .filter(item => item.age > 30)
// console.log(employeeWithHighAge)

//Calculate the total salary for all employees in each department.

const totalSalariesByDepartment = data.map(item => {
  const totalSalaries = item.employees.reduce(
    (acc, curr) => acc + curr.salary,
    0
  )
  return { departmentName: item.department, salary: totalSalaries }
})

// console.log(totalSalariesByDepartment)

//Identify which employee had the highest sales in January.

const employees = data.flatMap(item => item.employees)

let highestSalesEmployeeName = null
let highestSaleAmount = 0
employees.forEach(item => {
  const januarySales = item.sales.find(item => item.month === 'January')
  if (januarySales) {
    if (januarySales.amount > highestSaleAmount) {
      highestSaleAmount = januarySales.amount
      highestSalesEmployeeName = item.name
    }
  }
})

// console.log(highestSalesEmployeeName)
// console.log(highestSaleAmount)

// Identify which employee had the highest total sales overall.

const employeesWithSales = data.flatMap(department => department.employees)
const employeesWhoDidSales = employeesWithSales.filter(employee => employee.sales.length > 0)
const employeeWithHighestSales = employeesWhoDidSales.map(employeeWithSale => {
  const highestEmployee = employeeWithSale.sales.reduce((acc, curr) => acc + curr.amount ,0)
  console.log(employeeWithSale)
})

console.log(employeeWithHighestSales)