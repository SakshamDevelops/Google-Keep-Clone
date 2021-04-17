import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [content, setContent] = useState({
    heading: "",
    detail: ""
  });

  const [itemArr, setItemArr] = useState([
    {
      heading: "New note",
      body: "Trust me its new"
    }
  ]);

  function handleChange(event) {
    if (event.target.name === "title") {
      const heading = event.target.value;
      setContent((prevState) => {
        return { ...prevState, heading };
      });
    } else if (event.target.name === "content") {
      const body = event.target.value;
      setContent((prevState) => {
        return { ...prevState, body };
      });
    }
  }

  function addItem(event) {
    // itemArr.push(content);
    // console.log(itemArr);

    setItemArr((prevState) => {
      return [...prevState, content];
    });
    event.preventDefault();
  }

  function deleteItem(id) {
    console.log(id);

    setItemArr((prevState) => {
      return prevState.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea change={handleChange} add={addItem} />
      {itemArr.map((item, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={item.heading}
            content={item.body}
            delete={deleteItem}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
