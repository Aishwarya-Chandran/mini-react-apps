import { Container,Card } from "react-bootstrap"


export default function Score({bmiNo,bmiName,changeWeight}) {
  return (
    
      <div className="text-center shadow rounded p-4  row justify-content-center ">
        
          
            <h2>Your BMI Score</h2>
            <div className="row justify-content-md-center">
              <div className="p-3 my-2 fs-1 alert alert-primary col-sm-4">{bmiNo}</div>
            </div>
            <div className="fs-3 fw-bold text-primary">{bmiName}</div>
            {changeWeight.type==='positive'&&(
              <div className="fs-4">
                You need to lose <span className="fw-bold">{changeWeight.weight}kg </span>
              </div>
            )}
            {changeWeight.type==='negative'&&(
              <div className="fs-4">"You need to gain <span className="fw-bold">{changeWeight.weight}kg"</span></div>
            )}
            {changeWeight.type==='normal'&&(
              <div className="fs-4">"Your weight is Normal"</div>
            )}

      </div>
      
      

   
    
  )
}
