window.toRna = function (dna) {
    var output = '';
    for (var i = 0; i < dna.length; i++) {
        var current = dna[i];
        if (current == 'G'){
            output += 'C';
        } else if (current == 'C') {
            output += 'G';
        } else if (current == 'T'){
            output += 'A';
        } else if (current == 'A'){
            output += 'U';
        }
    }
    return output;
};

function transform(form){
    var value = form.transformer.value;

    document.getElementById('output').innerHTML = toRna(value);
    document.getElementById('id01').style.display ='block';

    return false;
}