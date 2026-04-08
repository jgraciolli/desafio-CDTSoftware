/*
    Exemplo de um User retornado pelo endpoint "https://jsonplaceholder.typicode.com/users":

    {
    "id": 1,
    "name": "Leanne Graham",   ---------------------------------> Nome completo do usuário
    "username": "Bret",   --------------------------------------> Nome de usuário (login)
    "email": "Sincere@april.biz",   ----------------------------> Endereço de email do usuário
    "address": { 
      "street": "Kulas Light",   -------------------------------> Rua do endereço do usuário
      "suite": "Apt. 556",   -----------------------------------> Complemento do endereço do usuário
      "city": "Gwenborough",   ---------------------------------> Cidade do endereço do usuário
      "zipcode": "92998-3874",   -------------------------------> CEP do endereço do usuário
      "geo": {
        "lat": "-37.3159",   -----------------------------------> Latitude da localização do usuário
        "lng": "81.1496"   -------------------------------------> Longitude da localização do usuário
      }
    },
    "phone": "1-770-736-8031 x56442",   ------------------------> Número de telefone do usuário
    "website": "hildegard.org",   ------------------------------> Site pessoal do usuário
    "company": {
      "name": "Romaguera-Crona",   -----------------------------> Nome da empresa onde o usuário trabalha
      "catchPhrase": "Multi-layered client-server neural-net", -> Frase de efeito da empresa
      "bs": "harness real-time e-markets"   --------------------> Descrição dos serviços da empresa
    }
  },
*/

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}