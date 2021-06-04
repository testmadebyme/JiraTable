$(document).ready(function () {
    alert("Hello World");
});

var $table = $('#table')

$(function () {



    var data = [];
    $.get('https://bymetest.atlassian.net/rest/api/3/issuetype').done(function (response) {
        responseData = response['auszug'];

        // Here you have to flat the array
        Object.keys(responseData).forEach(function (key) {

            var value = responseData[key];
            data.push(value);
        })
        $table.bootstrapTable({ data: data })
    })


});




    // method: 'GET',
    //     headers: {
    //     'Authorization': `Basic ${Buffer.from(
    //         'ola.sheremeta@gmail.com:xlXAC0FJWh2cnem4MJOe786A'
    //     ).toString('base64')}`,
    //         'Accept': 'application/json'
    // }


