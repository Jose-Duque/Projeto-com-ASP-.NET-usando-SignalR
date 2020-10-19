var connection = new signalR.HubConnectionBuilder().withUrl("/PromoHub").build();

connection.start().then(function () {
    console.info("Connected");
}).catch((error) => {
    console.error(error.toString());
});

connection.on("CadastroSucesso", function () {
    var msg = document.getElementById("msg");
    msg.innerHTML = "Cadastrado com sucesso";
});

connection.on("ReceberPromocao", function (promocao) {

    var container = document.getElementById("container-login");

    var containerPromo = document.createElement("div");
    containerPromo.setAttribute("class", "container-promo");

    var containerChamada = document.createElement("div");
    containerPromo.setAttribute("class", "container-chamada");

    var h1Titulo = document.createElement("h1");
    h1Titulo.innerText = promocao.empresa;

    var p1 = document.createElement("p");
    p1.innerText = promocao.chamada;

    var p2 = document.createElement("p");
    p2.innerText = promocao.regras;

    var containerBtn = document.createElement("div");
    containerBtn.setAttribute("class","container-botao");

    var link = document.createElement("a");
    link.setAttribute("href", promocao.enderecoUrl);
    link.setAttribute("target", "_blank");
    link.innerText = "Pegar";

    containerChamada.appendChild(h1Titulo);
    containerChamada.appendChild(p1);
    containerChamada.appendChild(p2);

    containerBtn.appendChild(link);

    containerPromo.appendChild(containerChamada);
    containerPromo.appendChild(containerBtn);

    container.appendChild(containerPromo);

    /*
      * <div class="container-promo">
            <div class="container-chamada">
                <h1>Carrefour</h1>
                <p>TV LG 40" - R$ 999,99</p>
                <p>Somente 20 unidades</p>
            </div>
            <div class="container-botao">
                Pegar
            </div>
        </div>
      */
})

var btnCadastrar = document.getElementById("btnCadastrar")

if (btnCadastrar != null) {

    btnCadastrar.addEventListener("click", function () {
        var empresa = document.getElementById("empresa").value;
        var chamada = document.getElementById("chamada").value;
        var regras = document.getElementById("regras").value;
        var enderecoUrl = document.getElementById("enderecoUrl").value;

        var promocao = {
            Empresa: empresa,
            Chamada: chamada,
            Regras: regras,
            EnderecoUrl: enderecoUrl
        }

        // Invoca o esta na pasta Hub
        connection.invoke("CadastrarPromocao", promocao).then(function () {
            console.info("Cadastrado com sucesso");
        }).catch(error => {
            console.error(error.toString());
        });
        //Todo - SignalR chamar o cadastro de promoção
    })
}