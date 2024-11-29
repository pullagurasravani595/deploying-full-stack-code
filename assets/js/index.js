let resultsTable = document.getElementById('results');

const createdRowsInTable = (item) => {
    const {name, status} = item

    let classValue = status==='Passed' ? 'passed' : 'failed'

    let trElement = document.createElement("tr")

    let thOneElement = document.createElement("th")
    thOneElement.textContent = name;
    thOneElement.classList.add('name');
    trElement.appendChild(thOneElement);

    let thTwoElement = document.createElement("th")
    thTwoElement.textContent = status;
    thTwoElement.classList.add(classValue);
    trElement.appendChild(thTwoElement);

    resultsTable.appendChild(trElement)

}

const viewSearchResults = (responseData) => {

    for (let item of responseData) {
        createdRowsInTable(item)
    }
}

const fetchResults = async() => {
    try {
        const apiUrl = 'https://transision-backend.onrender.com/api/checklist';
        const response = await fetch(apiUrl);
        const responseData = await response.json()
        viewSearchResults(responseData);
        console.log(response.ok);
    }catch(e) {
        console.log(e.message);
    }
    
}

document.addEventListener('DOMContentLoaded', fetchResults);