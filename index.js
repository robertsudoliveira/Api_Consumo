


async function read() {
    try {
        const url = new URL('http://localhost:5000/user');
        const request = new Request(url, {
            method: 'GET',
        });
        const response = await fetch(request);
        const json = await response.json();
        console.log(json)
    } catch (error) {
        console.log(error)
    }
}
read();

async function create(dados) {
    try {
        const url = new URL('http://localhost:5000/user');
        const request = new Request(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        });
        const response = await fetch(request);
        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.log(error)
    }
}
// api configurei pra receber os dados de name,email e password.
/* 
create({
    name: 'Robert1',
    email: 'Robert1@gmail.com',
    password: 'Robert1',
}
);

create({
    name: 'Robert2',
    email: 'Robert2@gmail.com',
    password: 'Robert2',
}
); */


async function update(id, dados) {
    try {
        const url = new URL(`http://localhost:5000/user/${id}`);
        const request = new Request(url, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        });
        const response = await fetch(request);
        console.log(response.json())
    } catch (error) {
        console.log(error)
    }
}
update(8, {
    password: 'Robert2'
});

async function deleteUser(id) {
    try {
        const url = new URL(`http://localhost:5000/user/${id}`);
        const request = new Request(url, {
            method: 'DELETE',
        });
        const response = await fetch(request);
        console.log(response.json())
    } catch (error) {
        console.log(error)
    }
}
deleteUser(27);


 // sempre que for consumir uma api vc precisará da URL da API
 // no caso usei o new URL() pro JS retornar essa URL pronta
 // depois preparei o request pra fazer a requisição pra API
 // no request coloquei a url e um objeto com as configurações
 // no fetch já faço a requisisão esperando uma resposta da API
 // e assim armazenei a resposta em uma constante