import React from "react";
import { useLocation } from "react-router-dom";

const DocumentPage = () => {
  let location = useLocation();

  console.log(location.state.data);
  const pdf = location.state.data;
  return (
    <div className="docPage">
      <iframe height="700" width="850" src={pdf.url}></iframe>
    </div>
  );
};

export default DocumentPage;
