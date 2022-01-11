import "./styles.css";
import { React, useState } from "react";

const InputSelectBox = () => {
  //現在選択されているselectedValueとそれを更新する関数
  //useStateを使用して初期値は"THML"
  const [selectedValue, setSelectedValue] = useState("HTML");

  //selectedValueの状態（どれが選択されているか）を更新する関数
  //onChangeイベントハンドラー配下につける
  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div className="App">
      <p>
        {/** onChangeでSelectedValueが更新、それに伴い変化 */}
        現在選択さされている値 :<b>{selectedValue}</b>
      </p>

      <select value={selectedValue} onChange={handleChange}>
        <option value="HTML">HTML</option>
        <option value="CSS">CSS</option>
        <option value="JavaScript">JavaScript</option>
      </select>
    </div>
  );
};

export default function App() {
  return <InputSelectBox />;
}
