export function signIn(){
    return new Promise( resolve =>{
        setTimeout(() => {
            resolve({
                token: 'hudsiahas7787sdas7',
                user: 'João',
                email: 'joao@gmail.com',
            })
        }, 2000)
    })
}