$(document).ready(function() {
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        const tableHeaders = Object.keys(data[0]).map(header => `<th>${header}</th>`).join('');
        const tableRows = data.map(row => Object.values(row));
  
        $('#myTable').append(`<thead><tr>${tableHeaders}</tr></thead>`);
  
        $('#myTable').DataTable({
          data: tableRows,
          columns: Object.keys(data[0]).map(header => ({ title: header }))
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });
  