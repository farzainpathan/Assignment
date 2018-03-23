et getValuePart = function(valString){
return valString.slice(valString.indexOf('<')+1, valString.indexOf('>'));
}

let getName = function(combinedName){
this.name = new class {
constructor(){}
}
this.name.first = getValuePart(combinedName);
combinedName = combinedName.slice(combinedName.indexOf('>')+1);
this.name.middle = getValuePart(combinedName);
combinedName = combinedName.slice(combinedName.indexOf('>')+1);
this.name.last = getValuePart(combinedName);
return name;
}

let getLocation = function(locationDetails){
this.location = new class{
constructor(){}
}

this.location.name = locationDetails.slice(locationDetails.indexOf('<')+1, locationDetails.indexOf('>'));
locationDetails = locationDetails.slice(locationDetails.indexOf('>')+1).slice(1, -1);
this.calcCoords = new class {
constructor(){}
}
calcCoords.long = getValuePart(locationDetails);
calcCoords.lat = getValuePart(locationDetails.slice(locationDetails.indexOf('>')+1));
this.location.coords = calcCoords;

return location;
}

let getFollowerDetails = function(followerDetails){
this.person = new class {
constructor(){}
}
this.person.id = followerDetails[1];
this.person.imageId = followerDetails[4];
this.person.name = getName(followerDetails[2]);
this.person.location = getLocation(followerDetails[3]);

return person;
}

let parseFollowers = function(followerList) {
let followers = new Array();
for(let follower of followerList){
followers.push(getFollowerDetails(follower.split('|')));
}
return followers;
}

let parseProfile = function(profileDetails) {
this.person = new class {
constructor(){}
}
this.person.id = profileDetails[1];
this.person.name = getName(profileDetails[2]);
this.person.location = getLocation(profileDetails[3]);
this.person.imageId = profileDetails[4];
return person;
}

let parseQueryString = function(queryString) {
let splitQueryString = queryString.split('**');
let profileDetails = parseProfile(splitQueryString[0].slice(7).split('|'));
profileDetails.followers = parseFollowers(splitQueryString[1].slice(9).split('@@'));
return profileDetails;
}

let queryString1 = 'profile|73241232|<Aamir><Hussain><Khan>|<Mumbai><<72.872075><19.075606>>|73241232.jpg**followers|54543342|<Anil><><Kapoor>|<Delhi><<23.23><12.07>>|54543342.jpg@@|12311334|<Amit><><Bansal>|<Bangalore><<><>>|12311334.jpg';

let queryString2 = 'profile|73241234|<Niharika><><Khan>|<Mumbai><<72.872075><19.075606>>|73241234.jpg**followers|54543343|<Amitabh><><>|<Dehradun><<><>>|54543343.jpg@@|22112211|<Piyush><><>||';

let queryString3 = 'profile||<><><>|<><<><>>|**followers||<><><>|<><<><>>|@@||<><><>||';

let queryString4 = 'profile|73241234|<Niharika><Rani><Khan>|<Mumbai><<72.872075><19.075606>>|73241234.jpg**followers|54543343|<Amitabh><Kumar><Bacchan>|<Dehradun><<23.23><12.07>>|54543343.jpg@@|22112211|<Piyush><M.><Mishra>|<Bangalore><<23.23><12.07>>|12311334.jpg@@|12311334|<Amit><><Bansal>|<Bangalore><<><>>|12311334.jpg@@|22112211|<Piyush><><>||';

console.log(JSON.stringify(parseQueryString(queryString1)));