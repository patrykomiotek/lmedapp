import { v4 as uuidv4 } from "uuid";
// import { Text, Button } from "@lmedui/common-ui";
import { useState } from "react";

export const Generator = () => {
  const [id, setId] = useState(uuidv4());

  return (
    <div>
      {/* <Text>{id}</Text>
      <Button label="Refresh" onClick={() => setId(uuidv4())} /> */}
      <p>{id}</p>
      <button onClick={() => setId(uuidv4())}>Refresh</button>
    </div>
  );
};
