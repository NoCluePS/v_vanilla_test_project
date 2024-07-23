let vardas = "";
let age = "";

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("name").addEventListener("input", function (e) {
    vardas = e.target.value;
  });
  document.getElementById("age").addEventListener("input", function (e) {
    age = e.target.value;
  });

  fetch("https://jsonplaceholder.typicode.com/users")
    .then(function (response) {return response.json()})
    .then(function (data) {
      for (let i = 0; i < data.length; i++) {
        let newEl = document.createElement("div");
        newEl.innerHTML = data[i].name + " <- ";
        let newerEl = document.createElement("a");
        newerEl.href = `https://${data[i].website}`
        newerEl.innerHTML = "Linkas"
        newerEl.target = "_blank"
        newEl.appendChild(newerEl)
        document.getElementById("result").appendChild(newEl);
      }
    })
    .catch((error) => console.error("Error:", error));

});

const hash = {
  a: "a",
  as: "ai",
  ė: "e",
  is: "i",
  us: "au",
  ys: "y",
};

function galune(arg1) {
  Object.keys(hash).forEach(function (key) {
    if (arg1.endsWith(key)) {
      arg1 = arg1.slice(0, -key.length) + hash[key];
    }
  });

  return arg1;
}

function submit() {
  let newEl = document.createElement("div");
  newEl.innerHTML = `${age > 18 ? "Senas" : "Jaunas"} tu ${galune(
    vardas
  )} ${age}`;
  document.getElementById("result").appendChild(newEl);
}
