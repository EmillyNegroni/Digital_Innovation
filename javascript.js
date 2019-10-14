//AULA DE INTRODUÇÃO AO JAVASCRIPT //
//********************************************************************** *******************************/
//javascript é executado do lado do cliente
var nome = "Emilly Negroni";
var idade = 19;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo";
// alert(nome + "tem"  + idade  + "anos"); //concatenação
alert(idade + idade2); //somatorio pq sao do type int

//executar no navegador com  console.log
//String
console.log(nome); 
console.log(idade);
console.log(frase);
//Trocar uma palavra da minha frase 
//Replace == Substituir conseguimos fazer pelo console e pelo alert 
console.log(frase.replace("Japão" , "Brasil"));
//toUppercase() == para maiúsculas colocar as palavras da frase em maiúsculas
console.log(frase.toUpperCase());
//toLowerCase() == para minúsculas  colocar as palavras da frase em minúsculas
console.log(frase.toLowerCase());


//**************************************************************************************************** */
//ARRAY []
// var list = ["maça" , "morango" , "uva"];
//console.log(list[1]); imprima o elemento da posição 1 da minha lista
var salada_de_frutas = ["Morango" , "Manga" , "Uva" , "Abacate"];
console.log(salada_de_frutas); //Imprime toda minha lista
console.log(salada_de_frutas[2]); //imprime somente o item na posição x
//adicionar um item a minha lista nome_da_lista.push("item a ser adicionado");
salada_de_frutas.push("Abacaxi");
console.log(salada_de_frutas);
//O método pop() remove o último elemento de um array e retorna aquele elemento.
//Retirar o ultimo elemento da lista nome_da_lista.pop();
salada_de_frutas.pop();
console.log(salada_de_frutas);
//ver o tamanho da minha lista nome_da_lista.length
console.log(salada_de_frutas.length);
// Reverse reverte a ordem dos elementos(ao contrario)
console.log(salada_de_frutas.reverse());
//tostring trazer para string perde a cara de array
console.log(salada_de_frutas.toString());
//join separar a string por traço ou outro caracter nome_da_lista.join(" -"));
console.log(salada_de_frutas.join(" - "));


//************************************************************************************* */
//DICIONARIO {}
var fruta = {nome:"Maça" , cor:"Vermelha"};
console.log(fruta.nome);
console.log(fruta.cor);
//lista de dicionário 
var frutas = [{nome:"Maça" , cor:"Vermelha"}, {nome:"Morango" , cor:"Rosa"}];
console.log(frutas);
console.log(frutas[1].nome);

//************************************************************************************************//
//CONDICIONAIS,LAÇOS DE REPETIÇÃO E DATE
// var idade = 20;
// if (idade > 18){
//     alert("Maior de idade");
// }else{
//     alert("Menor de idade");
// }
//Perguntar para pessoa prompot browser vai subir uma pergunta para o usuario
// var idadep = prompt("Qual sua idade? ");
// if (idadep > 18){
//     alert("Maior de idade");
// }else{
//     alert("Menor de idade");
// }
var count = 0;
while(count < 5){
    console.log(count);
    count++;
}
var count;
for(count=0; count <= 10; count++){
    console.log(count);
}
//Exibir a data atual
var d = new Date(); 
alert(d); //generica
alert(d.getDay()); //somente o dia
alert(d.getHours()); // somente horas
alert(d.getMinutes()); //somente minutos

//fuction
function soma(n1,n2){    //parametros
        return n1 + n2;
}
alert(soma(5,10));

function validaIdade(idade3){
    var validar;
    if(idade3 >= 18){
        validar = true
    }else{
        validar = false
    }  
    return validar;
}
var idade3 = prompt("Qual sua idade? ");
console.log(validaIdade(idade3));