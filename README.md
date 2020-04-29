# JornadaCientifica
Desenvolvimento do aplicativo de apoio da Jornada Científica e Semana Tecnológica do IFSULDEMINAS


## Rotas do Backend
Para executar o servidor, é necessário a instalação do node e que o repositório esteja em dia. Após essa verificação, executem o comando:
> npm i 


Para inicializar o servidor, execute o comando:
> adonis serve --dev 

O servidor estará escutando requisições na porta ```3333``` e o endereço será seu ```localhost```. Portando, uma requisição será do tipo ```http://localhost:3333/```. O ideal é criar uma classe de serviço para que esse endereço esteja presente apenas uma vez no código, facilitando depois quando for pro ar.

### Login
Para realizar login, a rota deverá ser:
>/login

deverá ser passado pelo corpo da requisição um JSON contendo:
> {
	"email": "yuri@email.com",
	"password": "senha123"
}

Será retornado um JSON com a seguinte estrutura:

>{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTU4NzQ5NTQ0MX0.tQXv4XxFykslDiKFeOvQ9R-X371CcK7WEhwlEoa3eYA",
  "userType": 1
}

O token será utilizado para controle de Sessão do usuário (não importante no momento).

O ```userType``` retornará qual o tipo de usuário, sendo
>0 - cantina
>1 - participante
>2 - avaliador

Esse deverá ser usado para direcionamento das telas de acordo com o tipo de usuário.


### Cadastro

Para realizar cadastro, a rota deverá ser:
>/register

deverá ser passado pelo corpo da requisição um JSON contendo:
> {
    ```"username": "Yuri Silva",```
	 ```"email": "yuri@email.com", ```
	 ```"password": "senha123", ```
	 "course": "curso do participante",
	 "school": "faculdade de origem do participante",
	 "campus": "campus da faculdade",
	 "whatsapp": "(45)98855-6655",
	 "type": "1"
}

Os campos em ```vermelho``` são ```obrigatórios```, porém os demais campos devem ser obrigatórios para os casos de participantes e avaliadores.

Será retornado apenas uma resposta com status ```201```, que significa ```criado```.
