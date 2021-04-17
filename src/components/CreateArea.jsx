import React, { useState } from "react";

function CreateArea(props) {

  return (
    <div>
      <form>
        <input onChange={props.change} name="title" placeholder="Title" />
        <textarea
          onChange={props.change}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={props.add}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
