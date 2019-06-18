import React from "react";


// export function Input(props) {
//   return (
//     <div className="form-group">
//       <input className="form-control" {...props} />
//     </div>
//   );
// }


export function Input(props) {
  return (
    <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" {...props} />
  )
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}


export function FormBtn(props) {
  return (
    <div className="input-group-append">
    <button {...props} className="btn btn-outline-secondary" type="button" id="button-addon2">{props.children}</button>
  </div>
  )
}

export function Btn(props) {
  return (
    <button {...props} >
      {props.children}
    </button>
  )
}


// className="btn btn-success">
// style={{ float: "right", marginBottom: 10}} 






