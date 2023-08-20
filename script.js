//Variable
let expenseName = document.getElementById('expense-name');
let expenseAmount = document.getElementById('expense-amount');
let expenseDate = document.getElementById('expense-date');
let expenseFeeling = document.getElementById('expense-feeling');
let addExpense = document.getElementById('add-expense');
let myForm = document.getElementById('myForm');
let id = 4;
//display variable
let displayExpenses = document.querySelector(".displayExpenses-div");

//Array of objects

let databaseArray = [
  // {
  //   id:1,
  //   expense:'Rent',
  //   amount: 6000,
  //   date: new Date('2023-08-02'),
  //   feeling: 'Normal'
  // },

  // {
  //   id:2,
  //   expense:'Car',
  //   amount: 3000,
  //   date: new Date('2023-08-02'),
  //   feeling: 'Normal'
  // },

  // {
  //   id:3,
  //   expense:'Food',
  //   amount: 4000,
  //   date: new Date('2023-08-02'),
  //   feeling: 'Normal'
  // }


]

console.log('Array before push: '+ databaseArray);


//Prevent Default
 myForm.addEventListener('submit',function(event){
  event.preventDefault();
  })

//form reset
let newExpense = {};
  addExpense.addEventListener('click', function(){
     newExpense = {
      expense: expenseName.value,
      amount: expenseAmount.value,
      date: expenseDate.value,
      feeling: expenseFeeling.value
    }
    myForm.reset();
    console.log(newExpense);
   let newArray  = [databaseArray.push(newExpense)];
    if(databaseArray != newArray){
      const showHTML = databaseArray.map((project, index)=>{
        return `
        <div class="displayExpenses-div">
          <p id="displayId">${index+1} </p>
          <p id="displayExpense">${project.expense} </p>
          <p id="displayAmount">${project.amount} </p>
          <p id="displayDate">${project.date} </p>
          <p id="displayFeeling">${project.feeling} </p>
        </div>
        `
      })
    
      displayExpenses.innerHTML = showHTML;
    }

  //store in localhost
  localStorage.setItem("databaseArray", JSON.stringify(databaseArray));
  })




//display 
window.addEventListener('DOMContentLoaded', function(){
  databaseArray = JSON.parse(localStorage.getItem('databaseArray'));
  const showHTML = databaseArray.map((project, index)=>{
    return `
    <div class="displayExpenses-div">
      <p id="displayId">${index+1} </p>
      <p id="displayExpense">${project.expense} </p>
      <p id="displayAmount">${project.amount} </p>
      <p id="displayDate">${project.date} </p>
      <p id="displayFeeling">${project.feeling} </p>
    </div>
    `
  })

  displayExpenses.innerHTML = showHTML;
})


