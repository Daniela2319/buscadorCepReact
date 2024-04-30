<h1 align="center"> Projeto -  Buscador CEP com REACT 💻 </h1>

<p align="center"> <a href="https://sujeitoprogramador.com/" target="_blank">Sujeito Programador </a> </p>

<p align="center">
<a href="#sobre">Sobre</a>&nbsp;&nbsp;&nbsp|&nbsp;&nbsp;&nbsp;
<a href="#tecnologia">Tecnologia</a>&nbsp;&nbsp;&nbsp|&nbsp;&nbsp;&nbsp;
<a href="#autor">Autor</a>.</p>

# Sobre

No youtube com sujeito programador para pratica e conhecer mais os comando do REACT, fiz uma cópia do buscador de Cep com motificação na imagem.

O buscador de CEP é uma aplicação web simples que permite aos usuários pesquisar por informações de endereço usando um CEP (Código de Endereçamento Postal) específico. Aqui está imagem detalhada de como a aplicação funciona.

<br>

<p align="center">
<img src="./src/img/imgbuscador.png" height="400" width="800">
  <br>
      
 </p>
 <p align="center">
    01 - Figura buscador de Cep na Web.
 </p>
<br>
 </p>
 <br>
 Após uma busca bem-sucedida, os detalhes do endereço correspondente ao CEP são exibidos abaixo do campo de entrada. Os detalhes incluem o próprio CEP, logradouro, complemento, bairro, localidade (cidade) e UF (unidade federativa ou estado).
<br>
<br>
 <p align="center">
<img src="./src/img/imgbuscado1.png" height="400" width="800">
  <br>
      
 </p>
 <p align="center">
    02 - Figura buscador de Cep na Web sendo acessando.
 </p>
<br>
 </p>

<br>

# Descrição do Código "Buscador de Cep"

**useState:** Este código importa o hook useState do React para gerenciar o estado da aplicação. Duas variáveis de estado são declaradas: input para armazenar o valor digitado pelo usuário no campo de entrada, e cep para armazenar os detalhes do endereço recuperados da API.

**handleSearch:** Esta é uma função assíncrona que é chamada quando o usuário clica no botão de busca. Ele verifica se o campo de entrada está vazio e exibe um alerta se estiver. Em seguida, ele faz uma solicitação à API fornecida com o CEP digitado pelo usuário. Se a solicitação for bem-sucedida, os detalhes do endereço são armazenados no estado cep, e o campo de entrada é limpo. Se ocorrer um erro durante a solicitação, um alerta de erro é exibido e o campo de entrada é limpo.

**Renderização JS**: O retorno da função App é uma estrutura JS que define a interface da aplicação. Ela inclui um título, um campo de entrada para o usuário digitar o CEP, um botão de busca, e uma seção para exibir os detalhes do endereço. A imagem do ícone de busca também é renderizada ao lado do campo de entrada.
Condição de Renderização: A seção que exibe os detalhes do endereço só é renderizada se o objeto cep tiver chaves (ou seja, se tiver informações de endereço disponíveis).

**Estilização:** A aplicação presume que há um arquivo CSS (App.css) para estilizar os elementos HTML. Os estilos são aplicados para criar uma interface de usuário atraente e responsiva.

# Tecnologia

Esse projeto foi desenvolvindo com as seguintes tecnologias:

- IDE VisualStudio Code
- HTML
- CSS
- JavaScript
- React
- Git e Github

# Autor

_Daniela Velter_
<br>
<br>
[![Linkedin](https://img.shields.io/badge/DANIELA-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/daniela-velter-231485f/)
