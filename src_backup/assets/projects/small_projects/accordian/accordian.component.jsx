import { useState } from "react";
import data from "./data";
import "./accordian.styles.css";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [multiSelected, setMultiSelected] = useState([]);
  const [multiSelection, setMultiSelection] = useState(false);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId) {
    let newSelected = [...multiSelected];
    const findIndexOfCurrrentId = newSelected.indexOf(getCurrentId);

    if (findIndexOfCurrrentId === -1) {
      newSelected.push(getCurrentId);
    } else {
      newSelected.splice(findIndexOfCurrrentId, 1);
    }
    setMultiSelected(newSelected);
  }

  function handleSetMultiSelection() {
    setMultiSelection(!multiSelection);
    setMultiSelected([]);
    setSelected(null);
  }

  return (
    <div
      className="wrapper"
      style={{
        width: "25vw",
        height: "25vh",
      }}
    >
      <button onClick={() => handleSetMultiSelection()}>
        {multiSelection ? (
          <div>Multi Selection: Enabled </div>
        ) : (
          <div>Multi Selection: Disabled</div>
        )}
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={
                  multiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3 className="question">{dataItem.question}</h3>
                <span onClick={() => setSelected(dataItem.id)}>
                  {selected === dataItem.id ? "-" : "+"}
                </span>
              </div>
              {multiSelection
                ? multiSelected.indexOf(dataItem.id) !== -1 && (
                    <div className="content">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="content">{dataItem.answer}</div>
                  )}
            </div>
          ))
        ) : (
          <div>No Data Found</div>
        )}
      </div>
    </div>
  );
}
