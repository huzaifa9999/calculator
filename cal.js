let result = document.getElementById("input");

let calculate = (number) => {
    result.value += number;
};

let Result = () => {
    try {
        result.value = eval(result.value);
    } catch (err) {
        result.value = "";
        alert("syntax error type correctly");
    }
};

function clc() {
    result.value = "";
}

function del() {
    result.value = result.value.slice(0, -1);
}