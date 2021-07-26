const fetchData = async () => {
  const response = await fetch('Resources/cities.json');
  return response.json();
};

const createDataTable = (cities) => {
  let dataDiv = document.querySelector('#data');
  console.log(dataDiv);
  let table = document.createElement('table');
  let tableBody = document.createElement('tbody');
  let tableHeader = document.createElement('tr');

  Object.keys(cities[0]).forEach((cellData) => {
    let thCell = document.createElement('td');
    thCell.appendChild(document.createTextNode(cellData));
    tableHeader.appendChild(thCell);
  });

  tableBody.appendChild(tableHeader);

  cities.forEach((rowData) => {
    let row = document.createElement('tr');

    Object.keys(rowData).forEach((cellData) => {
      let cell = document.createElement('td');
      cell.appendChild(document.createTextNode(rowData[cellData]));
      row.appendChild(cell);
    });

    tableBody.appendChild(row);
  });

  table.appendChild(tableBody);
  dataDiv.appendChild(table);
};

fetchData().then((res) => {
  createDataTable(res);
});
