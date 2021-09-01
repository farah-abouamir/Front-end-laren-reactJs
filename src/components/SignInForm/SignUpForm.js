import React from 'react';

const SignUpForm= () =>{
return(
<div className="LoginContainer">
        <h1>Inscription</h1>
        <form>
         <input placeholder="Nom" type="text"  name="nom"/>  
        <input placeholder="Email" type="email" name="email" />
        <input placeholder="Mot de passe" name="password"/>
        <input placeholder="Confirmer le mot de passe" />
        <input type="submit"  value="S'inscrire"></input>
        </form>
    </div>
);


};

export default SignUpForm;