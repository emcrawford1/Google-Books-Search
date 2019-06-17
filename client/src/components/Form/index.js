import React from "react";


function Form(props) {

  return (
    <div class="form-group">
      <label for="searchInput">Book Search</label>
      <input type="text" class="form-control" id="searchInput" placeholder="Search" />
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  )
}
export default Form;