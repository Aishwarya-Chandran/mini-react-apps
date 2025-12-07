import { useState } from "react";
import { Container, Card, CardHeader, CardBody } from "react-bootstrap";

export default function Form({getData}) {
  const [weight, Setweight] = useState("");
  const [height, Setheight] = useState("");
  const [alert,SetAlert]=useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    if(isNaN(weight)|| isNaN(height)){
      console.log("Not a valid input")
      SetAlert(true);
    }else{
      getData(weight,height);
      SetAlert(false);
      Setheight("");
      Setweight("");
      
    }
    
  };
 

  return (
    <div>
      
        <div className="col-12 col-sm-4 col-md-4 shadow rounded px-5 mx-auto">
          <div>
            <h1 className="text-center pt-3 text-secondary h2">BMI CALCULATOR</h1>
          </div>
          <form onSubmit={onSubmit} autoComplete="off">
            <div className="row">
              <div className="col col-sm-6">
                <div className=" my-3">
                  <label htmlFor="wei" className="form-label">
                    Weight(kg) :
                  </label>
                  <input
                    id="wei"
                    type="text"
                    value={weight}
                    onChange={(e) => Setweight(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col col-sm-6">
                <div className=" my-3">
                  <label htmlFor="hei" className="form-label">
                    Height(m) :
                  </label>
                  <input
                    id="hei"
                    type="text"
                    value={height}
                    onChange={(e) => Setheight(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>

              <input
                value="Get BMI"
                type="submit"
                className="btn btn-primary my-3 w-25"
              />
            </div>
          </form>
          {alert&&<div className="alert alert-danger">Enter Valid data</div>}
        </div>
      
    </div>
  );
}
