let Employee = function (name, position, office, age, startDate) {
  this.name = name;
  this.position = position;
  this.office = office;
  this.age = age;
  this.startDate = new Date(startDate);
};

let p1 = new Employee("mo7", "senior", "cairo", 23, "2025/12/3");
let p2 = new Employee("aly", "junior", "mon", 25, "2020/1/30");
let p3 = new Employee("hema", "team lead", "assiut", 44, "2003/6/25");
let p4 = new Employee("omar", "manager", "alex", 50, "2005/2/13");

let employees = [p1, p2, p3, p4];

function formatDate(date) {
  let d = new Date(date);
  let day = String(d.getDate()).padStart(2, "0");
  let month = String(d.getMonth() + 1).padStart(2, "0");
  let year = d.getFullYear();
  return `${day}/${month}/${year}`;
}

function renderTable(data) {
  let tbody = document.getElementById("employee-body");
  tbody.innerHTML = "";
  data.forEach((emp) => {
    let row = `<tr>
        <td>${emp.name}</td>
        <td>${emp.position}</td>
        <td>${emp.office}</td>
        <td>${emp.age}</td>
        <td>${formatDate(emp.startDate)}</td>
      </tr>`;
    tbody.innerHTML += row;
  });
}

function sortByName(arr, asc) {
  let temp = [...arr];
  if (asc) {
    return temp.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    return temp.sort((a, b) => b.name.localeCompare(a.name));
  }
}

function sortByPosition(arr, asc) {
  let temp = [...arr];
  if (asc) {
    return temp.sort((a, b) => a.position.localeCompare(b.position));
  } else {
    return temp.sort((a, b) => b.position.localeCompare(a.position));
  }
}

function sortByOffice(arr, asc) {
  let temp = [...arr];
  if (asc) {
    return temp.sort((a, b) => a.office.localeCompare(b.office));
  } else {
    return temp.sort((a, b) => b.office.localeCompare(a.office));
  }
}

function sortByAge(arr, asc) {
  let temp = [...arr];
  if (asc) {
    return temp.sort((a, b) => a.age - b.age);
  } else {
    return temp.sort((a, b) => b.age - a.age);
  }
}

function sortByDate(arr, asc) {
  let temp = [...arr];
  if (asc) {
    return temp.sort((a, b) => a.startDate - b.startDate);
  } else {
    return temp.sort((a, b) => b.startDate - a.startDate);
  }
}

renderTable(employees);
