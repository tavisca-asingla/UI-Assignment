'use strict'
// Basic Page Switching Code
function loadHome(){
    document.getElementById("entries-container").innerHTML=`
<div id="search-section">
    <!-- contains search box and add button -->
    <input class="pad" type="text" id="search-box">
    <button class="pad" id="add-button" disabled="disabled" onclick="addItem()">ADD</button>
    <div id="search-results"></div>
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
document.getElementById("search-box").addEventListener("keydown",eve=>{searchBoxQuery()});
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
    loadHome();
}

/*
    *Search And Add Functionality
*/

function searchBoxQuery()
{
    let toFind = document.getElementById('search-box').value.trim();
    let list="";
    data.forEach(element=>{
        if(element.item.toLowerCase().startsWith(toFind.toLowerCase())){
            list+=element.item+";";
        }     
        
    })
    let button = document.getElementById("add-button");
    if(list=="")
    {
        button.disabled = false;
        button.style.backgroundColor = "green";
    }
            
    else
    {
        button.disabled=true;
        button.style.backgroundColor = "red";
    }
           
    let finalList ="<ul>" 
        list = list.substring(0,list.length)
        list.split(";").forEach(line=>{
            finalList+= `<li> ${line} </li>`
        })
        finalList+="</ul>"
        document.getElementById('search-results').innerHTML = finalList;
        return finalList
}

function addItem(){
    let item = document.getElementById('search-box').value
    data[data.length] = {item: item};
    loadHome();
}

window.addEventListener("load", function() {
    document.getElementById("search-box").addEventListener("keyup",eve=>{searchBoxQuery()});
});

// document.getElementById("search-box").addEventListener("keydown",eve=>{searchBoxQuery()});