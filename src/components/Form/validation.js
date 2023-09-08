


export default function validate(userData, errors, setErros){
    const combinedRegex = /^(?=.{1,35}$)(?=\S+)([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,})$/;
    const passwordRegex = /^(?=.*\d).{6,10}$/;
    if(!userData.email) setErros({...errors, email: 'Email vacio'})
    else {
      if(combinedRegex.test(userData.email)) setErros({...errors, email:''})
      else setErros({...errors, email: 'Email invalido'})
}

// if(!userData.password) setErros({...errors, password: 'Password vacio'})
//     else {
//       if(passwordRegex.test(userData.password)) setErros({...errors, password:''})
//       else setErros({...errors, password: 'Password invalido'})
// }

}