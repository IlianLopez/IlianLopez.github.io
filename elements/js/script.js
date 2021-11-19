window.onload = () => {
    var arrayElements = [];
    let txtElemento = document.getElementById('txtElemento');
    let txtSimbolo = document.getElementById('txtSimbolo');
    let txtDescr = document.getElementById('txtDescr');
    let xobj = new XMLHttpRequest();
    let periodic = document.getElementsByClassName("periodic-table");
    let dataDiv = document.getElementById('data');
    document.body.addEventListener('click', () => {
        dataDiv.style.display = 'none';}, true);
    xobj.overrideMimeType('application/json');
    xobj.open('GET', './js/PeriodicTableJSON.json', true);
    xobj.onreadystatechange =function() {
        if (xobj.readyState == 4 && xobj.status == '200') {
            let json=JSON.parse(xobj.responseText);
            arrayElements=json.elements;
            let todo="";
            arrayElements.forEach(element => {
                let elementClass = "";
                let elementId = "";
                switch (element.category) {
                    case 'metalloid':
                        elementClass = 'metalloid';
                        break;
                    case 'noble gas':
                        elementClass = 'noble-gas';
                        break;
                    case 'alkali metal':
                        elementClass = 'alkali';
                        break;
                    case 'alkaline earth metal':
                        elementClass = 'alkaline';
                        break;
                    case 'lanthanide':
                        elementClass = 'lanthanide';
                        break;
                    case 'actinide':
                        elementClass = 'actinide';
                        break;
                    case 'polyatomic nonmetal':
                        elementClass = 'polyatomic-non-metal';
                        break;
                    case 'diatomic nonmetal':
                        elementClass = 'diatomic-nonmetal';
                        break;
                    case 'transition metal':
                    case 'post-transition metal':
                        break;
                    default:
                        elementClass = 'unknown';
                        break;
                }
                switch (element.name) {
                    case 'Hydrogen':
                        elementClass = 'hydrogen';
                        break;
                    case 'Helium':
                    case 'Boron':
                    case 'Aluminium':
                    case 'Cerium':
                    case 'Thorium':
                        elementId = element.name.toLowerCase();
                        break;
                }
                todo += `<li id="${elementId}" class="${elementClass}" data-id="${element.number}" data-sim="${element.symbol}" data-name="${element.name}" data-descr="${element.summary}">
                    <abbr title="${element.name}">${element.symbol}</abbr>
                </li>`;
            });
            periodic[0].innerHTML = todo;
            let elem = document.getElementsByTagName('li');
            for (let x = 0; x < elem.length; x++) {
                elem[x].addEventListener('click', (e) => {
                    dataDiv.style.display = 'block';
                    let name = elem[x].dataset.name;
                    let sim = elem[x].dataset.sim;
                    let descr = elem[x].dataset.descr;
                    txtElemento.innerHTML = name;
                    txtSimbolo.innerHTML = sim;
                    txtDescr.innerHTML = descr;
                });
            }
        }
    };
    xobj.send(null);
}