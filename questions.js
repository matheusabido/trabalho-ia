const questions = [
  {
      "question": "O que o método `Array.prototype.map()` faz em JavaScript?",
      "options": ["Transforma cada elemento de um array", "Encontra o primeiro elemento que satisfaz uma condição", "Remove o último elemento de um array", "Adiciona um novo elemento no final de um array"],
      "correctOption": 0
  },
  {
      "question": "Qual é o valor padrão de uma variável não inicializada em JavaScript?",
      "options": ["null", "undefined", "0", "NaN"],
      "correctOption": 1
  },
  {
      "question": "Qual operador é utilizado para atribuição em JavaScript?",
      "options": ["=", "==", "===", "!="],
      "correctOption": 0
  },
  {
      "question": "Qual é a função do `console.log()` em JavaScript?",
      "options": ["Executa um código JavaScript", "Interrompe a execução do código", "Exibe uma mensagem no console", "Adiciona um evento ao elemento"],
      "correctOption": 2
  },
  {
      "question": "Como se cria uma função em JavaScript?",
      "options": ["function myFunction() {}", "create myFunction() {}", "new Function() {}", "function = myFunction() => {}"],
      "correctOption": 0
  },
  {
      "question": "O que `NaN` significa em JavaScript?",
      "options": ["Número Anômalo Não-Digitado", "Não É Número", "Número Acessível Neutro", "Número de Aleatoriedade Natural"],
      "correctOption": 1
  },
  {
      "question": "Qual método pode ser usado para juntar dois ou mais arrays?",
      "options": ["concat()", "join()", "push()", "merge()"],
      "correctOption": 0
  },
  {
      "question": "Qual a saída de `typeof null`?",
      "options": ["null", "undefined", "object", "string"],
      "correctOption": 2
  },
  {
      "question": "Como você adiciona um comentário em JavaScript?",
      "options": ["// Este é um comentário", "<!-- Este é um comentário -->", "/* Este é um comentário */", "` Este é um comentário"],
      "correctOption": 0
  },
  {
      "question": "Qual declaração é usada para saídas condicionais?",
      "options": ["if", "for", "while", "do"],
      "correctOption": 0
  },
  {
      "question": "O que `let` faz em JavaScript?",
      "options": ["Declara uma variável de escopo de bloco", "Declara uma constante", "Declara uma função", "Define um novo objeto"],
      "correctOption": 0
  },
  {
      "question": "Qual método remove o último elemento de um array?",
      "options": ["pop()", "shift()", "remove()", "delete()"],
      "correctOption": 0
  },
  {
      "question": "Como você pode detectar o tipo de uma variável em JavaScript?",
      "options": ["typeOf variable", "typeof variable", "getType variable", "detectType variable"],
      "correctOption": 1
  },
  {
      "question": "Como criar um objeto em JavaScript?",
      "options": ["{ chave: valor }", "[ chave: valor ]", "< chave: valor >", "( chave: valor )"],
      "correctOption": 0
  },
  {
      "question": "Qual é o escopo de uma variável declarada com `var`?",
      "options": ["Escopo de bloco", "Escopo global ou de função", "Escopo de módulo", "Escopo de classe"],
      "correctOption": 1
  },
  {
      "question": "O que o método `Array.prototype.filter()` faz?",
      "options": ["Filtra um array, retornando somente os elementos que passam em um teste", "Modifica cada elemento do array", "Ordena os elementos do array", "Remove elementos duplicados de um array"],
      "correctOption": 0
  },
  {
      "question": "Qual é o resultado de `2 + '2'` em JavaScript?",
      "options": ["22", "4", "NaN", "Erro"],
      "correctOption": 0
  },
  {
      "question": "Qual palavra-chave é usada para definir uma constante?",
      "options": ["var", "let", "const", "constant"],
      "correctOption": 2
  },
  {
      "question": "Como verificar se uma variável `x` é igual a 5 e do tipo `number`?",
      "options": ["x === 5", "x == 5", "x = 5", "x != 5"],
      "correctOption": 0
  },
  {
      "question": "O que o método `Array.prototype.reduce()` faz?",
      "options": ["Reduz o tamanho de um array", "Aplica uma função a um acumulador e a cada valor do array", "Encontra o menor valor de um array", "Retorna um array com valores únicos"],
      "correctOption": 1
  },
  {
      "question": "Como você pode transformar uma string em um número?",
      "options": ["parseInt()", "toString()", "JSON.stringify()", "Array.from()"],
      "correctOption": 0
  },
  {
      "question": "Qual a diferença entre `==` e `===` em JavaScript?",
      "options": ["`==` compara valor e `===` compara valor e tipo", "`==` compara tipo e `===` compara valor", "Não há diferença", "`===` compara apenas strings"],
      "correctOption": 0
  },
  {
      "question": "Qual método converte um objeto JSON em string?",
      "options": ["JSON.stringify()", "JSON.parse()", "String()", "Object.toString()"],
      "correctOption": 0
  },
  {
      "question": "Como você chama uma função chamada `myFunction`?",
      "options": ["myFunction()", "call myFunction", "call function myFunction()", "execute myFunction"],
      "correctOption": 0
  },
  {
      "question": "O que `this` se refere dentro de uma função?",
      "options": ["Ao objeto global", "Ao objeto que a função pertence", "À própria função", "Ao primeiro argumento passado"],
      "correctOption": 1
  },
  {
      "question": "Qual é o método usado para adicionar elementos no final de um array?",
      "options": ["push()", "pop()", "append()", "unshift()"],
      "correctOption": 0
  },
  {
      "question": "O que `===` faz em JavaScript?",
      "options": ["Compara valor e tipo", "Compara apenas valor", "Atribui valor", "Retorna verdadeiro"],
      "correctOption": 0
  },
  {
      "question": "Qual a função de `JSON.parse()`?",
      "options": ["Converte uma string JSON em objeto", "Converte um objeto em string JSON", "Analisa um arquivo JSON", "Remove espaços de uma string JSON"],
      "correctOption": 0
  },
  {
      "question": "Como se cria uma promessa em JavaScript?",
      "options": ["new Promise()", "create Promise()", "init Promise()", "function Promise()"],
      "correctOption": 0
  },
  {
      "question": "Qual método remove o primeiro elemento de um array?",
      "options": ["shift()", "pop()", "removeFirst()", "unshift()"],
      "correctOption": 0
  },
  {
      "question": "Qual operador retorna o tipo de uma variável?",
      "options": ["typeof", "type", "getType", "checkType"],
      "correctOption": 0
  },
  {
      "question": "O que `Math.random()` faz em JavaScript?",
      "options": ["Gera um número aleatório entre 0 e 1", "Gera um número inteiro aleatório", "Retorna 0 ou 1", "Gera um número aleatório entre 0 e 100"],
      "correctOption": 0
  },
  {
      "question": "Qual palavra-chave é usada para sair de um loop?",
      "options": ["break", "exit", "return", "stop"],
      "correctOption": 0
  },
  {
      "question": "O que o operador `typeof` retorna para uma função?",
      "options": ["'function'", "'object'", "'string'", "'number'"],
      "correctOption": 0
  },
  {
      "question": "Qual método é usado para copiar uma array em JavaScript?",
      "options": ["slice()", "splice()", "copy()", "duplicate()"],
      "correctOption": 0
  },
  {
      "question": "O que `Array.prototype.splice()` faz?",
      "options": ["Adiciona, remove ou substitui elementos em um array", "Divide uma string em um array", "Retorna uma cópia de parte de um array", "Classifica os elementos de um array"],
      "correctOption": 0
  },
  {
      "question": "Qual é a saída de `typeof NaN`?",
      "options": ["'number'", "'NaN'", "'undefined'", "'null'"],
      "correctOption": 0
  },
  {
      "question": "Como verificar se uma variável é um array?",
      "options": ["Array.isArray()", "typeof array", "instanceof Array", "isArray()"],
      "correctOption": 0
  },
  {
      "question": "O que o método `Array.prototype.join()` faz?",
      "options": ["Combina todos os elementos de um array em uma string", "Remove o último elemento de um array", "Ordena os elementos de um array", "Adiciona elementos ao início de um array"],
      "correctOption": 0
  },
  {
      "question": "Como você define um objeto no modo estrito (strict mode)?",
      "options": ["'use strict'", "'use strict mode'", "'enable strict mode'", "'strict'"],
      "correctOption": 0
  },
  {
      "question": "Qual método converte uma string em letras maiúsculas?",
      "options": ["toUpperCase()", "toLowerCase()", "toUpper()", "upperCase()"],
      "correctOption": 0
  },
  {
      "question": "Como você faz um loop em uma lista de objetos?",
      "options": ["for (let obj of list)", "while (obj in list)", "for (let obj in list)", "list.forEach((obj) => {})"],
      "correctOption": 3
  },
  {
      "question": "O que `String.prototype.split()` faz?",
      "options": ["Divide uma string em um array de strings", "Combina duas strings", "Converte uma string para número", "Remove espaços de uma string"],
      "correctOption": 0
  },
  {
      "question": "Como você converte um número em uma string?",
      "options": ["String(num)", "toString(num)", "numberToString(num)", "num.convert()"],
      "correctOption": 0
  },
  {
      "question": "O que o método `Array.prototype.sort()` faz?",
      "options": ["Classifica os elementos de um array", "Adiciona um elemento ao final do array", "Remove um elemento específico do array", "Inverte a ordem dos elementos do array"],
      "correctOption": 0
  },
  {
      "question": "Como criar uma função assíncrona em JavaScript?",
      "options": ["async function", "await function", "function async()", "async() => {}"],
      "correctOption": 0
  },
  {
      "question": "Qual método pode ser usado para inverter os elementos de um array?",
      "options": ["reverse()", "invert()", "flip()", "swap()"],
      "correctOption": 0
  },
  {
      "question": "Qual operador é usado para verificar se um valor existe em um array?",
      "options": ["includes()", "in()", "exists()", "has()"],
      "correctOption": 0
  },
  {
      "question": "O que `isNaN()` faz em JavaScript?",
      "options": ["Verifica se um valor não é um número", "Verifica se um valor é uma string", "Verifica se um valor é null", "Verifica se um valor é undefined"],
      "correctOption": 0
  },
  {
      "question": "Como você pode mesclar dois objetos em JavaScript?",
      "options": ["Object.assign()", "merge()", "combine()", "join()"],
      "correctOption": 0
  },
  {
      "question": "Qual é o resultado de `2 * '3'` em JavaScript?",
      "options": ["6", "23", "undefined", "NaN"],
      "correctOption": 0
  },
  {
      "question": "Qual é o método para criar uma cópia superficial de um objeto?",
      "options": ["Object.assign()", "Object.copy()", "Object.clone()", "Object.duplicate()"],
      "correctOption": 0
  },
  {
      "question": "Qual operador retorna o módulo de uma divisão?",
      "options": ["%", "/", "//", "mod"],
      "correctOption": 0
  },
  {
      "question": "Qual é o propósito do `try...catch` em JavaScript?",
      "options": ["Lidar com exceções (erros)", "Testar a performance de um código", "Executar código de forma assíncrona", "Testar a sintaxe do código"],
      "correctOption": 0
  },
  {
      "question": "O que `Promise.all()` faz?",
      "options": ["Executa várias promessas simultaneamente", "Retorna a primeira promessa resolvida", "Rejeita todas as promessas", "Cria uma nova promessa"],
      "correctOption": 0
  },
  {
      "question": "Como declarar uma função anônima em JavaScript?",
      "options": ["function() {}", "let function = {}", "anonymous function()", "create function()"],
      "correctOption": 0
  },
  {
      "question": "Qual método converte um valor de verdade em um booleano?",
      "options": ["Boolean()", "toBoolean()", "convert()", "parseBoolean()"],
      "correctOption": 0
  },
  {
      "question": "O que o método `Array.prototype.slice()` faz?",
      "options": ["Retorna uma cópia de uma parte de um array", "Adiciona elementos ao final de um array", "Remove elementos de um array", "Adiciona um elemento ao início de um array"],
      "correctOption": 0
  },
  {
      "question": "Qual operador verifica se dois valores não são iguais?",
      "options": ["!=", "!==", "not equal", "!==="],
      "correctOption": 0
  },
  {
      "question": "Como você pode fazer uma requisição HTTP em JavaScript?",
      "options": ["fetch()", "require()", "request()", "xmlhttp()"],
      "correctOption": 0
  },
  {
      "question": "O que `Array.prototype.forEach()` faz?",
      "options": ["Executa uma função para cada elemento de um array", "Retorna um novo array baseado em uma função", "Encontra o primeiro elemento que passa em um teste", "Filtra os elementos de um array"],
      "correctOption": 0
  },
  {
      "question": "O que `console.error()` faz?",
      "options": ["Exibe uma mensagem de erro no console", "Interrompe a execução do código", "Exibe uma mensagem no console", "Exibe uma mensagem de alerta no console"],
      "correctOption": 0
  },
  {
      "question": "O que o método `Array.prototype.some()` faz?",
      "options": ["Verifica se ao menos um elemento do array passa em um teste", "Verifica se todos os elementos do array passam em um teste", "Modifica todos os elementos do array", "Retorna um subarray com elementos que passam em um teste"],
      "correctOption": 0
  },
  {
      "question": "Como você pode criar um array de números de 1 a 5?",
      "options": ["[1, 2, 3, 4, 5]", "[1 to 5]", "[1..5]", "[1...5]"],
      "correctOption": 0
  },
  {
      "question": "Qual método remove espaços em branco de uma string?",
      "options": ["trim()", "removeSpace()", "deleteSpace()", "strip()"],
      "correctOption": 0
  },
  {
      "question": "O que o método `String.prototype.indexOf()` faz?",
      "options": ["Retorna o índice da primeira ocorrência de um valor em uma string", "Retorna o índice da última ocorrência de um valor em uma string", "Verifica se um valor está em uma string", "Divide uma string em um array"],
      "correctOption": 0
  },
  {
      "question": "Qual a saída de `parseInt('10.5')`?",
      "options": ["10", "10.5", "11", "NaN"],
      "correctOption": 0
  },
  {
      "question": "O que `setTimeout()` faz em JavaScript?",
      "options": ["Executa uma função após um determinado tempo", "Interrompe a execução de uma função", "Executa uma função de forma assíncrona", "Define o tempo de execução de uma função"],
      "correctOption": 0
  },
  {
      "question": "Qual a diferença entre `let` e `var`?",
      "options": ["`let` tem escopo de bloco e `var` tem escopo de função", "`let` é global e `var` é local", "`let` é constante e `var` é variável", "Não há diferença"],
      "correctOption": 0
  },
  {
      "question": "Qual método adiciona um elemento ao início de um array?",
      "options": ["unshift()", "push()", "addFirst()", "prepend()"],
      "correctOption": 0
  },
  {
      "question": "Como você pode encadear promessas em JavaScript?",
      "options": [".then()", ".promise()", ".catch()", ".next()"],
      "correctOption": 0
  },
  {
      "question": "Qual é a saída de `typeof []`?",
      "options": ["'object'", "'array'", "'[]'", "'string'"],
      "correctOption": 0
  },
  {
      "question": "O que o operador `||` faz?",
      "options": ["Retorna o primeiro valor verdadeiro", "Retorna o primeiro valor falso", "Inverte um valor booleano", "Retorna o segundo valor verdadeiro"],
      "correctOption": 0
  },
  {
      "question": "Como verificar se um valor é `null` em JavaScript?",
      "options": ["value === null", "value == null", "typeof value === 'null'", "value == undefined"],
      "correctOption": 0
  },
  {
      "question": "Como fazer uma cópia de um array em JavaScript?",
      "options": ["[...array]", "array.copy()", "copyArray(array)", "array.clone()"],
      "correctOption": 0
  },
  {
      "question": "Qual operador retorna a exponenciação em JavaScript?",
      "options": ["**", "^", "exp()", "pow()"],
      "correctOption": 0
  },
  {
      "question": "O que `Array.prototype.every()` faz?",
      "options": ["Verifica se todos os elementos do array passam em um teste", "Verifica se algum elemento do array passa em um teste", "Modifica todos os elementos do array", "Retorna um subarray com elementos que passam em um teste"],
      "correctOption": 0
  },
  {
      "question": "Qual método pode ser usado para mesclar dois arrays?",
      "options": ["concat()", "merge()", "combine()", "join()"],
      "correctOption": 0
  },
  {
      "question": "Qual método retorna a última ocorrência de um valor em uma string?",
      "options": ["lastIndexOf()", "indexOf()", "findLast()", "substring()"],
      "correctOption": 0
  },
  {
      "question": "Qual a saída de `parseFloat('10.5')`?",
      "options": ["10.5", "10", "NaN", "11"],
      "correctOption": 0
  },
  {
      "question": "Como você cria uma string de números de 1 a 5?",
      "options": ["'12345'", "'1,2,3,4,5'", "'1:5'", "'1-5'"],
      "correctOption": 0
  },
  {
      "question": "Qual método adiciona um elemento ao final de um array?",
      "options": ["push()", "pop()", "append()", "unshift()"],
      "correctOption": 0
  },
  {
      "question": "Qual a saída de `2 ** 3`?",
      "options": ["8", "6", "9", "5"],
      "correctOption": 0
  }
]