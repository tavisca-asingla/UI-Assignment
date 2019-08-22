'use strict'
// Basic Page Switching Code
function loadHome(){
    document.getElementById("entries-container").innerHTML=`            <div id="search-box">
    <!-- contains search box and add button -->
    <input class="pad" id="search-box" type="text" onkeyup="">
    <button class="pad" disabled="disabled">ADD</button>
</div>
<div id="entries">
    <!-- Entries and Actions Table Here -->
    <table>
        <thead>
            <tr>
                <th>Item</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody id="entry-table">
            <tr>
                <td>Pseudo Row</td>
                <td><button>Edit</button> <button>Remove</button></td>
            </tr>
        </tbody>
    </table>
</div>`;
populateTable();
}

function loadUses(){
    document.getElementById("entries-container").innerHTML=`To-Do List Can Become a major part of your life.
                                                        All You have to do is to complete all the tasks present in this list.`
}

function loadAbout(){
    document.getElementById("entries-container").innerHTML=`This application is create by Aniket Singla with the use of HTML, CSS and Vanilla
    JavaScript. This is just a User Interface without any backend and hence all your saved data may disappear on shutdown of this application or Browser`
}


// Main Code 

let data = [
    {
        item : "Pseudo Element"
    },
    {
        item: "Machine Learning"
    },
    {
        item: "BioPic"
    }
];

function populateTable(){
    let htmlCode = '';
    data.forEach(element => {
        htmlCode += `<tr>
                        <td>${element.item}</td>
                        <td><button onclick="editItemWizard(${data.indexOf(element)})">Edit</button> <button onclick="removeItem(${data.indexOf(element)})">Remove</button></td>
                    </tr>`
    });
    document.getElementById("entry-table").innerHTML = htmlCode;
}
function editItemWizard(id){
    document.getElementById("entries-container").innerHTML =   `<h5>Edit Item Wizard:</h5>
                                                                <input type="text" id="edit-item">
                                                                <button onclick="editItem(${id})">Save</button>`
    
}

function editItem(id){
    let newValue = document.getElementById("edit-item").value;
    data[id] = {item : newValue}
    loadHome();
}

function removeItem(id){
    data.splice(id,1);
    populateTable();
}

/*
    *Search And Add Functionality
*/

function searchBoxQuery()
{
    let toFind = document.getElementById('search-box').value
    let list="";
    data.forEach(element=>{
        if(element.item.toLowerCase().startsWith(toFind.toLowerCase())){
            list+=element.item;
        }
        document.getElementById('search-results').innerHTML = list
    })
}

function addItem(){
    let item = document.getElementById('search-box').value
    data[data.length] = {item: item};
    loadHome();
}