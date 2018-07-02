//Get input element
let filterInput = document.getElementById('filterInput');
//Add event listener
filterInput.addEventListener('keyup', filterNames);

function filterNames() {
    //Get value of input
    let filterValue = document.getElementById('filterInput').value.toUpperCase();
    //Get names unordered list
    let ul = document.getElementById('names');
    //Get collection-items
    let li = ul.getElementsByClassName('collection-item');
    //Loop through collection-items list items
    for (let i in li) {
        let a = li[i].getElementsByTagName('a')[0];
        //If match or not
        if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
            //Reappear
            li[i].style.display = '';
        }
        else{
            //Disappear
            li[i].style.display = 'none';
        }
    }
}