let input = document.querySelector("#input")
let button = document.querySelector('#button')
let list = document.querySelector('#todolist')
let arr = []


button.onclick = function(){
    arr.push(input.value)
    console.log(arr)
    input.value = " "
    appendlist()
}

// appending the data from array

function appendlist(){
    list.innerHTML = null
    for (let i = 0; i<arr.length; i++){
        // METHOD 1
        // let view_list = document.createElement("li")
        // view_list.innerText = arr[i]
        // list.append(view_list)
        // METHOD 2
        // list.innerHTML +="<li>"+arr[i] + "</li>"
        // METHOD 3

        list.innerHTML += `<li> ${arr[i]}<a onclick = editList(${i})> Edit</a><a onclick = del(${i})> X   |</a> </li>`
    }
}

// Edit functiuonality

function editList(i){

    let edit = prompt("Edit");
        if (edit !== null){
            if  (edit !== ""){
                arr[i] = edit
                appendlist()
            }else{
                
            }
        }else{

        }


    }

function del(i){
    arr.splice(i, 1)
    appendlist()
}