window.onload = function(){
    let table = new Table();
    for(i=3; i< 6; i++){
        let catAge = calculateCatAge(i);
        table.addAge(i, catAge);
    }
    document.getElementById("placeholder").innerHTML = table.generate();
};

function calculateCatAge(age)
{
    let estimatedAge = 0;
    estimatedAge = age * 7;
    return estimatedAge;
}

class Table{
    universalAgeData = [];
    catAgeData = [];
    addAge(uniAge, catAge){
        this.universalAgeData.push(uniAge);
        this.catAgeData.push(catAge);
    }

    generate(){
        const table = '<table border="1">';
        const header = "<tr><th>Age</th><th>Cat Age</th></tr>"
        const etable = "</table>";
        let rows = "";
        for(let j=0; j< this.catAgeData.length; j++){
            rows = rows + `<tr><td>${this.universalAgeData[j]}</td><td>Your cat is ${this.catAgeData[j]} years old in cat years</td><tr>`;
        }
        let retVal = `${table}${header}${rows}${etable}`;
        return retVal;
    }
}