const csvFilePath = 'height-dataset.csv'; // Path to the CSV file
const fs = require('fs');
const csv = require('csv-parser');

const results = [];

fs.createReadStream(csvFilePath)
    .pipe(csv())
    .on('headers', (headers) => {
        results.push(headers); // Add headers as the first element in the results array
    })
    .on('data', (data) => {
        results.push(data);
    })
    .on('end', () => {
        const jsonData = JSON.stringify(results);
        fs.writeFile('data.json', jsonData, (err) => {
            if (err) {
                console.error('Error writing JSON file:', err);
            } else {
                console.log('CSV to JSON conversion completed.');
            }
        });
    });
