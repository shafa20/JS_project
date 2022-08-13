

var selectedRow = null;
var btn = document.querySelector(".button")
btn.addEventListener("click", employdata);


function employdata(){
  var ax = read_Input_Value();
  if (selectedRow == null){
    create_Tr_Td(ax);
    remove_input_value()
  }
  else{   
    updatefunc(ax); 
    remove_input_value(); 
    selectedRow = null;
  }

}

function read_Input_Value(){
  var redemp={} 
  redemp["ename"] = document.querySelector(".empname").value;
  redemp["comp"] = document.querySelector(".comp").value;
  redemp["des"] = document.querySelector(".designation").value;
  redemp["mob"] = document.querySelector(".mobile").value;
  redemp["joind"] = document.querySelector(".joind").value;
  redemp["salary"] = document.querySelector(".empsalary").value;
  return redemp
}
function create_Tr_Td(x){
  var empTable = document.querySelector(".list");
  var emp_tr = empTable.insertRow(empTable.length);
  var emp_td1 = emp_tr.insertCell(0);
  var emp_td2 = emp_tr.insertCell(1);
  var emp_td3 = emp_tr.insertCell(2);
  var emp_td4 = emp_tr.insertCell(3);
  var emp_td5 = emp_tr.insertCell(4);
  var emp_td6 = emp_tr.insertCell(5);
  var emp_td7 = emp_tr.insertCell(6);
  var emp_td8 = emp_tr.insertCell(7);
  var totalRowCount = document.querySelector(".list tr").length;
  emp_td1.innerHTML = empTable.rows.length-1;
  

  emp_td2.innerHTML = x.ename;   
  emp_td3.innerHTML = x.comp;
    emp_td4.innerHTML = x.des;
    emp_td5.innerHTML = x.mob;
    emp_td6.innerHTML = x.joind;
  emp_td7.innerHTML = x.salary;
  
  emp_td8.innerHTML = '<a class="edt bg-secondary" onClick="onEdit(this)">Edit</a>  / <a class="dlt bg-danger" onClick="onDelete(this)">Delete</a>';
}

function remove_input_value(){
  document.querySelector(".empname").value= " ";
  document.querySelector(".comp").value= " ";
  document.querySelector(".designation").value= " ";
  document.querySelector(".mobile").value= " ";
  document.querySelector(".joind").value= " "; 
  document.querySelector(".empsalary").value= " ";  
}

function onEdit(y){
  console.log(y);

  //var selecteventbtn = document.querySelector("a.edt");
    selectedRow = y.parentElement.parentElement;
    //document.querySelector(".empid").value = selectedRow.cells[0].innerHTML;
    document.querySelector(".empname").value = selectedRow.cells[1].innerHTML;
    document.querySelector(".comp").value = selectedRow.cells[2].innerHTML;
    document.querySelector(".designation").value = selectedRow.cells[3].innerHTML;
     document.querySelector(".mobile").value = selectedRow.cells[4].innerHTML;
     document.querySelector(".joind").value = selectedRow.cells[5].innerHTML;
    document.querySelector(".empsalary").value = selectedRow.cells[6].innerHTML;
}

function updatefunc(redemp){
  selectedRow.cells[1].innerHTML = redemp.ename;
  selectedRow.cells[2].innerHTML = redemp.comp;
  selectedRow.cells[3].innerHTML = redemp.des;
  selectedRow.cells[4].innerHTML = redemp.mob;
  selectedRow.cells[5].innerHTML = redemp.joind;
  selectedRow.cells[6].innerHTML = redemp.salary;
  
}


function onDelete() {
    if (confirm('Are you sure to delete this record ?')) {
        var selectdelete = document.querySelector("a.dlt");
        selectdelete = selectdelete.parentElement.parentElement.remove(0);
    }
}


