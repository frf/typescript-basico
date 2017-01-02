///<reference path="src/Product.ts"/>

module App{
    var p = new Product("Book 1","Code Book",100);

    document.getElementById("app").innerHTML = `
        <div>
            <ul>
                <li>${ p.name } - ${ p.description } - ${ p.value } </li>
            </ul>
        </div>        
    `;
    console.log(p);
}