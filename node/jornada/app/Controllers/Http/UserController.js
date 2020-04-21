'use strict'

const User = use("App/Models/User");
const Token = use("App/Models/Token");

class UserController {

    async store({request}){
        const data = request.post()
        const user = await User.create(data)
        return user;
    }

    async login ({ request, auth }) {
        const { email, password } = request.all()
        await auth.attempt(email, password)
        const { token, type } = await auth.authenticator('jwt').generate(auth.user)
        console.log(token)
        const { id, type: userType } = auth.user
        
        await Token.create({ token, type, user_id: id })

        return { token, userType };
    }

    async logout({ auth }){
        await auth.logout()
        return 'Logged out successfully'
    }
}

module.exports = UserController