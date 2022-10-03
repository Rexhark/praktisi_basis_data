const xmlhttp = new XMLHttpRequest();

function loadDoc(url, cFunction) {
  console.log(xmlhttp.readyState)
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {cFunction(xhttp)}
  xhttp.open("GET", url);
  xhttp.send();
}

function myFunction1(xhttp) {
  var myObj = JSON.parse(xhttp.responseText);
  console.log(myObj);
  let data_mahasiswa = `
  <thead>
    <tr>
        <th>ID</th>
        <th>Course Name</th>
        <th>Duration</th>
    </tr>
  </thead>
  <tbody>
  `;
  for (let index = 0; index < myObj.length; index++) {
        data_mahasiswa = data_mahasiswa + `
      <tr>
        <td>${myObj[index].course_id}</td>
        <td>${myObj[index].NAME}</td>
        <td>${myObj[index].duration}</td>
      </tr>
      `; 
  }
  data_mahasiswa = data_mahasiswa + `
  </tbody>
  `;
  document.getElementById("mahasiswa").innerHTML = data_mahasiswa;
}

function myFunction2(xhttp) {
  var myObj = JSON.parse(xhttp.responseText);
  let data_mahasiswa = `
  <thead>
    <tr>
        <th>ID</th>
        <th>Full Name</th>
        <th>Address</th>
        <th>Major</th>
    </tr>
  </thead>
  <tbody>
  `;
  for (let index = 0; index < myObj.length; index++) {
        data_mahasiswa = data_mahasiswa + `
      <tr>
        <td>${myObj[index].students_id}</td>
        <td>${myObj[index].full_name}</td>
        <td>${myObj[index].address}</td>
        <td>${myObj[index].major}</td>
      </tr>
      `; 
  }
  data_mahasiswa = data_mahasiswa + `
  </tbody>
  `;
  document.getElementById("mahasiswa").innerHTML = data_mahasiswa;
}

function myFunction3(xhttp) {
  var myObj = JSON.parse(xhttp.responseText);
  let data_mahasiswa = `
  <thead>
    <tr>
        <th>ID</th>
        <th>Full Name</th>
        <th>Mata Kuliah</th>
        <th>Tanggal</th>
        <th>Jam</th>
    </tr>
  </thead>
  <tbody>
  `;
  for (let index = 0; index < myObj.length; index++) {
        data_mahasiswa = data_mahasiswa + `
      <tr>
        <td>${myObj[index].id}</td>
        <td>${myObj[index].full_name}</td>
        <td>${myObj[index].nama}</td>
        <td>${myObj[index].tanggal}</td>
        <td>${myObj[index].jam}</td>
      </tr>
      `; 
  }
  data_mahasiswa = data_mahasiswa + `
  </tbody>
  `;
  document.getElementById("mahasiswa").innerHTML = data_mahasiswa;
}