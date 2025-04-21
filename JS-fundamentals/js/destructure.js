///////////////// Destructure of Objects

// const student = {
//   name: "Alex Johnson",
//   age: 20,
//   department: "Computer Science",
//   address: {
//     // city: "New York",
//     state: "NY",
//     country: "USA",
//     phone: {
//     	phone : "987456310",
//     	mobile : "987456311",
//     	landline : "987456312",
//     }
//   }
// };

// function showStudent({name: fullanme = "kayenat", age, department, address: {state, phone:{phone, mobile, landline}}}) {
// 	console.log(`My name is ${fullanme} , age is ${age} , department is ${department} and state is ${state}, landline ${landline}.` );
// }

// showStudent(student);

// // const name = student.name;
// // const department = student.department;
// // const address = student.address;

// // console.log(name);
// // console.log(department);
// // console.log(address);

// const { department, age , name: fullname = "Test" } = student

// console.log(fullname);
// console.log(department);
// // console.log(fullanme);

// const { address: {city:newcity = "Turkey"} }  = student;
// console.log(newcity);


///////////////// Destructure of Array ///////////////////
const fruits = ["Apple", "Banana", "Pineapple", "cherry", "Guava"];

const [f1, ...rest] = fruits;
console.log(f1);
// console.log(f2);
console.log(...rest);



const employee = [
	{
		id:1,
		name:"Userone",
		phone:"9876543210",
		address:"kolkata",
	},
	{
		id:2,
		name:"usertwo",
		phone:"9876543211",
		address:"Bihar",
	},
	{
		id:3,
		name:"userthree",
		phone:"9876543212",
		address:"Patna",
	},
	{
		id:4,
		name:"userfour",
		phone:"9876543213",
		address:"Kankinara",
	}
]

const [{phone}, , {name}] = employee;
console.log(phone)
console.log(name);


const employee2 = employee[2].name;
console.log(employee2);






