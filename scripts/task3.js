window.onload = function(){
    var total = 0;
    var list = new List();

    function addMe(avalue){
        total = total + avalue;
        return total;
    }

    for(let j=1; j< 4; j++){
        addMe(j);
        list.addSum(total);
    }
    document.getElementById("placeholder").innerHTML = list.generate();
}

class List{
    data = [];
    
    addSum(sum){
        this.data.push(sum);
    }

    generate(){
        const ul = "<ul>";
        const eul = "</ul>";
        let li = "";
        for(let j=0; j< this.data.length; j++){
            li = li + `<li>${this.data[j]}</li>`;
        }
        let unorderedList = `${ul}${li}${eul}`;
        return unorderedList;
    }
}

