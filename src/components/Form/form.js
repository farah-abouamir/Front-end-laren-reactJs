import React from 'react';
import './form.css'

const Form= () => {
return (
    
<div className="form-style">
<h1>Formulaire de condidature</h1>
<form>
    <div class="section"><span>1</span>Informations d'entité</div>
    <div class="inner-wrap">
        <label>Nom<input type="text" name="field1" /></label>
        <label>Adresse<textarea name="field2"></textarea></label>
        <label>Email<input type="email" ></input></label>
    </div>

    <div class="section"><span>2</span>Informations du ressource numérique</div>
    <div class="inner-wrap">
        <label>Nom du produit<input type="text" name="field3" /></label>
        <label>Matiére<select name="field4" class="select">
        <option value="Arabe">Arabe</option>
        <option value="Français">Français</option>
        <option value="Math">Math</option>
        <option value="Sciences">Sciences</option>
        </select></label>
        <label>Niveau<select name="field4" class="select">
        <option value="Primaire">Primaire</option>
        <option value="Secondaire">Secondaire</option>
        <option value="Baccalaureat">Baccalaureat</option>
        </select></label>
        <label>Demande de condidature<input type="file" className="file-input" name="demandeCondidature"/></label>     
        <label>Guide d'utilisation<input type="file" className="file-input" name="Guide"/></label>
        <label>Lien<input type="url" name="lien"/></label>
    </div>

    <div class="section"><span>3</span>Informations de responsable</div>
        <div class="inner-wrap">
    
        <label>Nom<input type="text" name="field1" /></label>
        <label>Prénom<input type ="text" name="field2"></input></label>
        
        <label>Email<input type="email" ></input></label>
        <label>Qualité<input type="text" ></input></label>
        
    </div>
    <div class="button-section">
     <input type="submit" name="Sign Up" />
     <input type="reset" name="reset"/>
     <span class="privacy-policy">
     <input type="checkbox" name="field7"/>You agree to our Terms and Policy.
     </span>
    </div>
</form>
</div>
    
);

};


export default Form;