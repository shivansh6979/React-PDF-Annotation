import React from "react";
import { Link } from "react-router-dom";

export const DocumentList = () => {
  const docList = [
    {
      id: 1,
      name: "Sample Document 1.pdf",
      url: "https://arxiv.org/pdf/2212.08011.pdf",
    },
    {
      id: 2,
      name: "Sample Document 2.pdf",
      url: "https://arxiv.org/pdf/2212.07937.pdf",
    },
    {
      id: 3,
      name: "Sample Document 3.pdf",
      url: "https://arxiv.org/pdf/2212.07931.pdf",
    },
  ];

  return (
    <div className="docList">
      <div className="heading">
        <h1>DocumentList</h1>
        <hr />
      </div>

      {docList.map((x, index) => {
        return (
          <Link
            className="link"
            key={index}
            to={"/DocumentPage"}
            state={{ data: x }}
          >
            {x.name}
          </Link>
        );
      })}
    </div>
  );
};

export default DocumentList;
