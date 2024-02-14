window.onload = function(){
    var total = 0;
    var list = new List();

    function addMe(x){
        total = total + x;
        return total;
    }

    //Call the addMe function three times.
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

