
function plus() {
    var add_num_1 = Number(document.getElementById('add-number-1').value);
    var add_num_2 = Number(document.getElementById('add-number-2').value);
    document.getElementById('result').innerHTML = add_num_1 + add_num_2;
};


function subtraction() {
    var sub_num_1 = Number(document.getElementById('sub-number-1').value);
    var sub_num_2 = Number(document.getElementById('sub-number-2').value);
    document.getElementById('sub-result').innerHTML = sub_num_1 - sub_num_2;

};




function divide() {
    var divide_num_1 = Number(document.getElementById('divide-number-1').value);
    var divide_num_2 = Number(document.getElementById('divide-number-2').value);
    document.getElementById('divide-result').innerHTML = divide_num_1 / divide_num_2;

};

function multiply() {
    var multiply_num_1 = Number(document.getElementById('multiply-number-1').value);
    var multiply_num_2 = Number(document.getElementById('multiply-number-2').value);
    document.getElementById('multiply-result').innerHTML = multiply_num_1 * multiply_num_2;

};

 

