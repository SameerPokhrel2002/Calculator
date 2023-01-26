let string = "";

// document.querySelector("input").value="0";
let buttons = document.querySelectorAll("button");// selects all the elements with tagname "button" and store it in variable buttons

//now create an array from the list of all those selected elements
Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML == "=") {
            //convert string to array first
            let arr=string.split("");
            for (let i=0;i<arr.length;i++){
            if (arr[i]=="%"){
                let per=arr[i-1]/100;
                arr.pop(arr[i]);
                arr.pop(arr[i-1]);
                // console.log(arr);
                 string=arr.join("");
                string+=per;
                string=eval(string);
                document.querySelector("input").value=string;
            }
        }
            string = eval(string);
            document.querySelector("input").value = string;
        }
        else if(e.target.innerHTML=="AC"){
            string="";
            document.querySelector("input").value =string;

        }
        else {
            string += e.target.innerHTML;
            document.querySelector("input").value = string;
        }

    })
})
