AP.request('https://bymetest.atlassian.net/rest/api/3/OLGA/search', {
    success: function(responseText){
        var projectTable = document.getElementById("projects");
        var data = JSON.parse(responseText);

        for (var x = 0; x < data.values.length; x++) {
        var value = data.values[x];
        console.log(value);
        var newRow = projectTable.insertRow(-1);
        var newCellLogo = newRow.insertCell(0)
        var newCellKey = newRow.insertCell(1);
        var newCellProject = newRow.insertCell(2);

        newCellLogo.innerHTML = "<img src='" + value.avatarUrls["16x16"] + "' width='16'>";
        newCellKey.innerHTML = "<code>" + value.key + "</code>";
        newCellProject.innerHTML = "<a href='/browse/" + value.key + "'>" + value.name + "</a>";
        };

        projectTable.deleteRow(1);
    }
});