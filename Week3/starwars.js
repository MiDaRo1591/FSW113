// declare any necessary variables
var queryType;
var itemID;

// define a function called 'fetchData()' that passes the values from 
// the 'queryType' and 'itemID' elements in starwars.html to the function 
// called 'getFromSWAPI()'

function getFromSWAPI() {
    
    // assign values to any necessary variables
    fetch(`https://swapi.dev/api/${queryType}/${itemID}`)
    .then(function (response) {
        return response.json()
    })
    .then(function(data){
        updateInfo(data)
    })
    .catch(function(err) {
        console.warn(err)
    })
}
function WTF()
{
    fetch(`https://swapi.dev/api/${queryType}/${itemID}`)
    .then(x => x.text())
    .then(y => document.getElementById("dataLabel1").innerHTML = y)
    
    console.log(y); //`3 ${y}`);
}

function fetchData()
{
    itemID = document.getElementById("itemID").value;
    queryType = document.getElementById("queryType").value;

    
    console.log(`2 ${itemID}`);
    console.log(`2 ${queryType}`);
    getFromSWAPI();
    WTF();
}

// create a new function called 'updateInfo()' that receives the data from 
// the call to that function (see above). Use logic to write the appropriate
// labels to 'dataLabel1' and 'dataLabel2' elements in starwars.html, as well
// as the appropriate values from the data object to the 'dataValue1' and 
// 'dataValue2' elements in starwars.html.




/*
<script>
    !function(d,s,id)
    {
        var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';
        if(!d.getElementById(id))
        {
            js=d.createElement(s);
            js.id=id;
            js.src=p+'://platform.twitter.com/widgets.js';
            fjs.parentNode.insertBefore(js,fjs);
        }
    }
    (document, 'script', 'twitter-wjs');
    </script>
*/