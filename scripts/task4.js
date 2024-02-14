window.onload = function(){
    let table = new Table();
    
    //Call the calculateCatAge three times.
    for(i=3; i< 6; i++){
        let catAge = calculateCatAge(i);
        table.addAge(i, catAge);
    }
    document.getElementById("placeholder").innerHTML = table.generate();
};

/**
 * Calculates the cat age.
 * @param {*} humanAge 
 * @returns the cat age.
 */
function calculateCatAge(humanAge)
{
    let catAge = 0;
    catAge = humanAge * 7;
    return catAge;
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
            rows = rows + `<tr><td><img src="images/tiger.png" width="300px"><br />${this.universalAgeData[j]}</td><td><span style="font-weight: bold;font-size:40px;">Your cat is ${this.catAgeData[j]} years old in cat years!</td><tr>`;
        }
        let retVal = `${table}${header}${rows}${etable}`;
        return retVal;
    }
}