# Artesanal Ayres Pedidos - API REST

## Disponível em https://api-artesanal-ayres.herokuapp.com

### Consultar cardápio 

- Consulte o menu utilizando o método GET 

> GET https://rafaelsapi.herokuapp.com/cardapio

Deve retornar uma resposta semelhante a essa:

```json
[
   {
      "id":1,
      "type":"Hambúrguer",
      "name":"Tradicional",
      "image":"https://guia-static.gazetadopovo.com.br/fichas/3904/3904-530d79890f1b7fa8d9bd951958f58ebf.png",
      "info":"Delicioso Pão Tradicional, Blend suculento com 150g, além de Molho Secreto da casa",
      "price":"R$ 12,00"
   },
   {
      "id":2,
      "type":"Hambúrguer",
      "name":"Hora da Salada",
      "image":"https://www.cidadeoferta.com.br/storage/offers/1900-sr-burguer-londrina-x-salada-angus-3.jpg",
      "info":"Delicioso Pão de Gergelim, Blend suculento com 150g, Queijo Mussarela, Barbecue, Salada composta por Alface, Tomate e Cebola; além de Molho Secreto da casa",
      "price":"R$ 16,00"
   },
   {
      "id":3,
      "type":"Hambúrguer",
      "name":"Tropical Ayres",
      "image":"https://user-images.githubusercontent.com/49280362/87713500-aff48380-c780-11ea-8cd7-ae7d148506c0.jpg",
      "info":"Delicioso pão de Brioche, Blend suculento com 150g, Abacaxi Assado, Queijo, Barbecue e Molho Secreto da casa",
      "price":"R$ 18,00"
   },
   {
      "id":4,
      "type":"Hambúrguer",
      "name":"Gran Cheddar",
      "image":"https://cdn.guiadacozinha.com.br/wp-content/uploads/2019/11/hamburguer-mexicano.jpg",
      "info":"Delicioso pão de Gergelim Torrado, Blend suculento com 150g, Farofa de Bacon, Queijo Cheddar, Barbecue, Picles, além do Molho Secreto da casa",
      "price":"R$ 21,00"
   },
   {
      "id":5,
      "type":"Hambúrguer",
      "name":"Big Ayres",
      "image":"https://supermercadosrondon.com.br/guiadecarnes/images/postagens/quer_fazer_hamburger_artesanal_perfeito_2019-05-14.jpg",
      "info":"Delicioso pão de Brioche, 2 (dois) Blends suculentos totalizando 300g, Queijo, Barbecue, tiras de Bacon e Molho Secreto da casa",
      "price":"R$ 28,00"
   },
   {
      "id":6,
      "type":"Hambúrguer",
      "name":"Insano",
      "image":"https://burgerx.com.br/assets/img/galeria/burgers/triple-x.jpg",
      "info":"Delicioso pão de Gergelim, 3 (três) Blends suculentos totalizando 450g, Queijo Mussarela, Barbecue e Molho Secreto da casa com Maionese de Ervas",
      "price":"R$ 28,00"
   }
]
```

### Consulte os adicionais

- Consulte os adicionais usando o método GET 

> GET https://api-artesanal-ayres.herokuapp.com/adicionais

Deve retornar uma resposta semelhante a essa:

```json
[
   {
      "id":7,
      "type":"Adicionais",
      "name":"Ovo",
      "info":null,
      "price":"R$1,50"
   },
   {
      "id":8,
      "type":"Adicionais",
      "name":"Blend",
      "info":null,
      "price":"R$5,00"
   },
   {
      "id":9,
      "type":"Adicionais",
      "name":"Cebola Caramelizada",
      "info":null,
      "price":"R$3,00"
   },
   {
      "id":10,
      "type":"Adicionais",
      "name":"Queijo",
      "info":null,
      "price":"R$3,00"
   }
]
```


#### Faça os testes utilizando o POSTMAN ou clicando no link
