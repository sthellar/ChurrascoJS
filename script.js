document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#churrascoForm").addEventListener("submit", (evt) => {
        evt.preventDefault();

        const adultosComAlcool = parseFloat(document.getElementById("inputAdultosComAlcool").value);
        const adultosSemAlcool = parseFloat(document.getElementById("inputAdultosSemAlcool").value);
        const criancas = parseFloat(document.getElementById("inputCriancas").value);

        const adultos = adultosComAlcool + adultosSemAlcool;
        const pessoas = adultos + criancas;
        
        const carne = (0.4 * adultos + 0.2 * criancas).toFixed(2);
        const acompanhamentos = (0.2 * pessoas).toFixed(2);
        const cerveja = (2 * adultosComAlcool).toFixed(2);
        const refrigerante = (0.5 * (adultosSemAlcool + criancas)).toFixed(2);
        const agua = (0.4 * pessoas).toFixed(2);

        document.getElementById("ResultadoAdultos").textContent = `Adultos: ${adultos}`;
        document.getElementById("ResultadoPessoas").textContent = `Pessoas: ${pessoas}`;
        document.getElementById("ResultadoCarne").textContent = `Carne: ${carne} kg`;
        document.getElementById("ResultadoAcompanhamentos").textContent = `Acompanhamentos: ${acompanhamentos} kg`;
        document.getElementById("ResultadoCerveja").textContent = `Cerveja: ${cerveja} litros`;
        document.getElementById("ResultadoRefrigerante").textContent = `Refrigerante: ${refrigerante} litros`;
        document.getElementById("ResultadoAgua").textContent = `Água: ${agua} litros`;

        document.getElementById("bloco1").classList.add("esconder");
        document.getElementById("bloco2").classList.remove("esconder");

    });

    document.querySelector("#recarregarButton").addEventListener("click", () => {
        location.reload();
    });
});