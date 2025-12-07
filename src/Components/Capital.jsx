import { Container,Card,CardHeader,CardBody} from "react-bootstrap";
import React, {  useState } from "react";


export default function StatesCap(){
    const[Selectsate,SetSelectsate]= useState('Kerala');

    const [Selectcaptial ,SetSelectcaptial ] =useState('Tvm');
   
    const data = {
        "Kerala" : "Tvm",
        "TamilNadu":"Chennai",
        "Karnataka":"Bnglr"
    };
    const changestate=(e)=>{
        SetSelectsate(e.target.value)
        SetSelectcaptial (data[Selectsate]);
        
    }
    
    

    return(
        <>
        <Container className="d-flex jusyify-content-center align-items-center">
            <Card>
                <select onChange={changestate}>
                    <option value="Kerala">Kerala</option>
                    <option value="TamilNadu">TamilNadu</option>
                    <option value="Karnataka">Karnataka</option>
                </select>
                <CardBody>
                    <p>The Selected State is {Selectsate}</p>
                    <p>The selected Captial is {Selectcaptial}</p>
                </CardBody>

          
            </Card>
        </Container>
        
        
        </>
    )

}
