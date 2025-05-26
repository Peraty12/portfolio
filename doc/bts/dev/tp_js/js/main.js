"use strict";

fetch('https://jsonplaceholder.typicode.com/users')
    .then(function (reponseHttp) {
        return reponseHttp.json();
    })
    .then(function (jsonData) {
        // console.log(jsonData);
        addUser(jsonData);
    });

let addUser = function (userData) {
    userData.forEach(function (data) {
        console.log(data);

        users.dataset.id = data.id;
        users.dataset.userame = data.username;
        users.dataset.address = data.address.street +
            data.address.suit +
            data.address.city;
            users.dataset.lat = data.address.lat;
            users.dataset.long = data.address.lng;

        let pName = document.createElement('p');
        pName.innerHTML = data.name;
        
        let pEmail = document.createElement('p');
        pEmail.innerHTML = data.email;

        let divLinks = document.createElement('div');
        divLinks.classList.add("links");
        
        let aPosts = document.createElement('a');
        aPosts.setAttribute('href', '#');

        let aInfos = document.createElement('a');
        aInfos.setAttribute('href', '#');
        
        let aWeb = document.createElement('a');
        aWeb.setAttribute('href', data.website);
        aWeb.setAttribute('target', '_blank');

        users.append(pName);
        users.append(pEmail);
        users.append(divLinks);
        divLinks.append(aPosts);
        divLinks.append(aInfos);
        divLinks.append(aWeb);
    })
};

// addPost(title, boby)

// fillDetails(username, address)

// fillMap(latitude, longitude, text)

// isUrValid(url)
