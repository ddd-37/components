import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          imageSrc={faker.image.avatar()}
          name={faker.name.firstName()}
          text={faker.lorem.sentence()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          imageSrc={faker.image.avatar()}
          name={faker.name.firstName()}
          text={faker.lorem.sentence()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          imageSrc={faker.image.avatar()}
          name={faker.name.firstName()}
          text={faker.lorem.sentence()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
