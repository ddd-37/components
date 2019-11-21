import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        imageSrc={faker.image.avatar()}
        name={faker.name.firstName()}
        text={faker.lorem.sentence()}
      />
      <CommentDetail
        imageSrc={faker.image.avatar()}
        name={faker.name.firstName()}
        text={faker.lorem.sentence()}
      />
      <CommentDetail
        imageSrc={faker.image.avatar()}
        name={faker.name.firstName()}
        text={faker.lorem.sentence()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
