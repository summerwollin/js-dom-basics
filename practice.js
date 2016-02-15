var animals = {
  cat: "mew",
  dog: "woof",
  bear: "rawr",
  goose: "honk",
  bird: "tweet"
}
var body = document.getElementsByTagName("body")[0];
var table = document.createElement('table');

var tr = document.createElement('tr');
var td = document.createElement('td');
var td2 = document.createElement('td');

var tr2 = document.createElement('tr');
var td3 = document.createElement('td');
var td4 = document.createElement('td');

var tr3 = document.createElement('tr');
var td5 = document.createElement('td');
var td6 = document.createElement('td');

var tr4 = document.createElement('tr');
var td7 = document.createElement('td');
var td8 = document.createElement('td');

var tr5 = document.createElement('tr');
var td9 = document.createElement('td');
var td10 = document.createElement('td');

document.getElementsByTagName("body")[0].appendChild(table);
document.getElementsByTagName("table")[0].appendChild(tr);
document.getElementsByTagName("table")[0].appendChild(tr2);
document.getElementsByTagName("table")[0].appendChild(tr3);
document.getElementsByTagName("table")[0].appendChild(tr4);
document.getElementsByTagName("table")[0].appendChild(tr5);

document.getElementsByTagName("tr")[0].appendChild(td);
td.innerText = Object.keys(animals)[0];
document.getElementsByTagName("tr")[0].appendChild(td2);
td2.innerText = animals.cat;

document.getElementsByTagName("tr")[1].appendChild(td3);
td3.innerText = Object.keys(animals)[1];
document.getElementsByTagName("tr")[1].appendChild(td4);
td4.innerText = animals.dog;

document.getElementsByTagName("tr")[2].appendChild(td5);
td5.innerText = Object.keys(animals)[2];
document.getElementsByTagName("tr")[2].appendChild(td6);
td6.innerText = animals.bear;

document.getElementsByTagName("tr")[3].appendChild(td7);
td7.innerText = Object.keys(animals)[3];
document.getElementsByTagName("tr")[3].appendChild(td8);
td8.innerText = animals.goose;

document.getElementsByTagName("tr")[4].appendChild(td9);
td9.innerText = Object.keys(animals)[4];
document.getElementsByTagName("tr")[4].appendChild(td10);
td10.innerText = animals.bird;
