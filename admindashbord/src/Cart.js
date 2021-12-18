import React, { useState } from "react";
import Menu from "./Menu";

function Cart() {
  const [item, setItem] = useState(Menu);
  return (
    <div>
      <div className="row">
        {item.map((item,i) => {
          return (
            <div className="col-xl-3 col-sm-6 col-12" key={i}>
              <div className="card mb-2">
                <div className="card-content">
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <span>{item.information}</span>
                      <h3 className="text-primary">{item.numberinformation}</h3>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span>{item.newinformation}</span>
                      <h3 className="text-primary">{item.numbernewinformation}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cart;
