import { useState } from 'react'
import style from './Form.module.css'
import validate from './validation'


export default function Form(props){
    const [userData, setUserData] = useState({
        email:'',
        password:'',
    })
    console.log(userData.email)

    const [errors, setErros]= useState({
        email: '',
        password: ''
    })

    const handleChange = (event) =>{
        const property= event.target.name;
        const value = event.target.value;

        setUserData({...userData, [property]: value})
        validate({...userData, [property]: value}, errors, setErros)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        props.login(userData)
    }



    return(
        <form onSubmit={handleSubmit} className={style.formulario}>
            <div>
                <label htmlFor="Email">Email:</label>
                <input 
                type="text" 
                name= 'email' 
                value={userData.email}
                onChange={handleChange}
                />
                <span>{errors.email}</span>
            </div>
            <div>
                <label htmlFor="Password">Password:</label>
                <input 
                type="text"
                name= 'password'
                value={userData.password}
                onChange={handleChange}
                />
                <span>{errors.password}</span>
            </div>
            <button>Submit</button>     
        </form>
    )
}