import React, { useContext, useEffect, useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import SideBar from "../side-bar/SideBar";
import Clock from "../clock/Clock";
import "./workSpace.scss";

const WorkSpace = () => {
  const data = {
    id: "fsdsdf3432",
    name: "Tasks",
    content: "",
  };
  const [value, setValue] = useState(data);

  const updateValue = (newContent) => {
    setValue((prevValue) => {
      return { ...prevValue, content: newContent };
    });
  };

  return (
    <div className="work-space">
      <SideBar style={{ width: "300px" }} />
      <div data-color-mode="light" style={{ width: "100%", height: "100vh" }}>
        <div className="work-space__clock">
          <Clock />
        </div>
        <MDEditor
          highlightEnable={false}
          value={value.content}
          hideToolbar="true"
          onChange={updateValue}
          preview="edit"
          textareaProps={{
            placeholder: "Please enter the text",
          }}
        />
      </div>
    </div>
  );
};

export default WorkSpace;
