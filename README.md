# Olá, tudo bem?

A proposta deste teste é analisar a sua capacidade de desenvolver uma arquitetura visando o maior **reaproveitamento** entre o mobile e a web.
Para este teste você deverá desenvolver um ***APP** e uma aplicação **Web*** com um fluxo de login/cadastro utilizando React + React Native + Redux.

# App e Aplicação Web
O **App** a aplicação ***Web*** deverá conter 4 páginas:
  - **/login**: Página contendo um formulário com os campos usuário e senha e 2 botões login e signup.
    - Caso o usuário clique no botão login:
     Deverá ser validado se o usuário possui um cadastro com este login realizando um **POST** na API http://www.mocky.io/v2/5defab092f0000e7848e0c9e com um body ***JSON*** contendo o usuário e senha conforme o seguinte exemplo:
      ```json
      {
        "username": "teste-mock-serasa",
        "password": "teste-mock-serasa"
       }
       ```
    - Caso retorne sucesso (200) significa que este usuário possui um cadastro válido e nesse caso redirecionaremos ele para uma tela de boas vindas (rota raíz "/" ), caso o usuário não possua um login válido demonstre uma mensagem de erro informando que o login não é válido.
    - Caso o usuário clique no botão **signup** redirecione o usuário para a página "/signup"
    - **Observação**: Caso a validação de formulário falhe (campo de login ou senha vazio) mostre uma mensagem pedindo para o usuário revalidar os dados e tentar novamente.

  - **/signup**: Página contendo um formulário com os campos usuário e senha, além 2 botões signup e cancel.
    - Caso o usuário clique no botão signup:
    Validaremos se ele preencheu o campo de usuário e os campos de senha (validar se as 2 senhas são iguais) e realizaremos um POST na API http://www.mocky.io/v2/5defab092f0000e7848e0c9e com um body JSON contendo o usuário e senha conforme o seguinte exemplo:
       ```json
       {
         "username": "teste-mock-serasa",
         "password": "teste-mock-serasa"
        }
        ```
    - Caso retorne sucesso (200) redirecionaremos o usuário para a página de login (/login) onde ele terá que preencher usuário e senha novamente conforme fluxo acima. Caso a API não retorne sucesso mostraremos uma mensagem de erro informando que aqueles dados não são válidos.
    - Caso o usuário clique no botão cancel, redirecione o usuário para a página **"/login"**
    - ***Observação***: Caso a validação de formulário falhe (campo de login ou senha vazio) mostre uma mensagem pedindo para o usuário revalidar os dados e tentar novamente.
    
   - **/**: Se e apenas se o usuário tiver realizado um login válido renderizaremos uma tela contendo uma lista dos pratos de comida favoritos do usuário. para acessar a lista do usuário realizaremos um GET na API http://www.mocky.io/v2/5df018d52f0000abc18e0f22 a resposta irá conter um body JSON da seguinte forma:
     ```json
      {
          "dishes": [
            {
              "image": "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/baked-chilli-jacket-potatoes.jpg",
              "description": "This impressive baked potato is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
            },
            {
              "image": "https://thumbor.thedailymeal.com/Li6jFZP4s0EjJYTzA4H2lJvhAuM=/870x565/filters:format(webp)/https://www.thedailymeal.com/sites/default/files/slideshows/1952820/2121750/1-cordonbleu-shutterstock.JPG",
              "description": "This dish originated in Switzerland, and is a riff on traditional schnitzel. But instead of just frying the pounded veal cutlet, it’s stuffed with ham and an easily meltable cheese (generally Swiss or Gruyère), rolled up into a roulade, and then deep-fried."
            },
            {
              "image": "https://assets.marthastewart.com/styles/wmax-750/d34/med105046_1109_thx_brussels_sprout/med105046_1109_thx_brussels_sprout_horiz.jpg?itok=I0yv420R",
              "description": "This delicious seasonal vegetable becomes sweet and nutty when browned. For the best flavor and texture, make the dish just before serving."
            },
            {
              "image": "https://assets.marthastewart.com/styles/wmax-750/d35/homemade-stuffing-in-dish-mla101092/homemade-stuffing-in-dish-mla101092_horiz.jpg?itok=A3bUnnFE",
              "description": "Studded with meaty chestnuts and fragrant with parsley and sage, this stuffing is equally good cooked inside or outside the turkey."
            }
          ]
        }
        ```
        Você deve utilizar o array de pratos recebido da API para gerar a lista de cards com os pratos do usuário. Caso ele não tenha realizado um login válido redirecionaremos ele para a rota “/login”
  - Qualquer outra rota deverá renderizar uma página com o texto: “Página não encontrada”
    
# Entrega
 - Crie um breve README de como fazer o App rodar.
# Prazo
 - O prazo para a entrega do App é de 1 semana
# Observações
- As página mostradas como exemplo são apenas um guia da estrutura da página, não se sinta preso a replicar com exatidão os exemplos;
- Durante os fluxos em alguns momentos temos a exibição de mensagem de erro para o usuário. Sinta-se livre para demostrar essa mensagem de erro com o texto e da forma que for mais fácil para você, o objetivo não é validar o uso desses elementos dentro do app e sim a arquitetura dele;
- Sinta-se livre para usar outras dependências dentro do seu projeto como por exemplo Material-UI NativeBase;
- Vise desenhar uma arquitetura que reaproveite a maior quantidade de código entre o mobile e a web sem criar limitações de experiência entre as duas plataformas;
- Neste desafio não estamos pedindo a realização e estruturação de testes já que o objetivo desse teste é validar como você estrutura a sua aplicação usando react e react native. Mas caso deseje fazer testes para a sua aplicação fique a vontade. Aqui utilizamos Jest e Enzyme para o desenvolvimento dos nossos testes.
