$(document).ready(function() {

    const BASE_URL ='http://89.108.65.123';
    let cityname = [];
    $.ajax({
        url: BASE_URL + '/cities',
        dataType: 'json',
        type: 'get',
        success: (data) => {
            for ( let ob of data) {
                if (ob.hasOwnProperty("name")){
                    console.log(ob.name);
                    cityname.push(ob.name);
                }
            }
            console.log(cityname);
        }

    });

    $("#validationServer01").autocomplete({
        source:cityname,
        minLength: 3
    });

});