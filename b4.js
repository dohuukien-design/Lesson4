const abc = document.querySelector('#signup')
const def = document.querySelector('#signin')

const su_btn = document.getElementById('signup_btn')
const si_btn = document.getElementById('signin_btn')

var signup_content = document.getElementById('signup')
var signin_content = document.getElementById('signin')

var sign_in = document.createElement('a')
sign_in.style.display = 'block'
sign_in.textContent = 'Sign In'
sign_in.href = 'b4.html'
sign_in.style.backgroundColor = 'red'


document.querySelector('#signup_btn').addEventListener('click',() => {
    abc.removeChild(su_btn)
    signup_content.innerText = 'Sign Up'
    let Up = new SignUp()
    Up.render(abc)
})
document.querySelector('#signin_btn').addEventListener('click', () => {
    def.removeChild(si_btn)
    signin_content.innerText = 'Sign In'
    let In = new SignIn()
    In.renderI(def)
    def.appendChild(sign_in)
})

class SignUp {
    constructor(){
        this.username = document.createElement('input')
        this.email = document.createElement('input')
        this.phone = document.createElement('input')
        this.password = document.createElement('input')
        this.cfpass = document.createElement('input')
        this.submit = document.createElement('button')

        this.password.type = 'password'
        this.cfpass.type = 'password'

        this.submit.textContent = 'Submit'

        this.username.placeholder = 'Username'
        this.email.placeholder = '123@abc'
        this.phone.placeholder = 'Phone Number'
        this.password.placeholder = 'Password'
        this.cfpass.placeholder = 'Confirm Password'

        this.username.style.display = 'block'
        this.email.style.display = 'block'
        this.phone.style.display = 'block'
        this.password.style.display = 'block'
        this.cfpass.style.display = 'block'

    }

    render = (container) => {
        const div = document.createElement('div')
        div.appendChild(this.username)
        div.appendChild(this.email)
        div.appendChild(this.phone)
        div.appendChild(this.password)
        div.appendChild(this.cfpass)
        div.appendChild(this.submit)
        container.appendChild(div)
    }
}

class SignIn  {
    constructor(){
        this.username = document.createElement('input')
        this.password = document.createElement('input')

        this.password.type = 'password'

        this.username.placeholder = 'Username'
        this.password.placeholder = 'Password'

        this.username.style.display = 'block'
        this.password.style.display = 'block'
}
    renderI = (containers) => {
        const div = document.createElement('div')
        div.appendChild(this.username)
        div.appendChild(this.password)
        containers.appendChild(div)
    }
}

