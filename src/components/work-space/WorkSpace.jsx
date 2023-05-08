import MDEditor from "@uiw/react-md-editor";
import "./workSpace.scss";

const WorkSpace = () => {
  return (
    <div data-color-mode="light">
      <MDEditor
        value={`value`}
        onChange={console.log("value")}
        preview="edit"
        hideToolbar="true"
      />
    </div>
  );
};

export default WorkSpace;
