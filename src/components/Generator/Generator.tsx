import { v4 as uuidv4 } from "uuid";
// import { Text, Button } from "@lmedui/common-ui";
import { useState } from "react";
import { Text, Button } from "../../ui";

export const Generator = () => {
  const [id, setId] = useState(uuidv4());

  return (
    <div>
      {/* <Text>{id}</Text>
      <Button label="Refresh" onClick={() => setId(uuidv4())} /> */}
      <Text className="py-4">{id}</Text>
      <Button onClick={() => setId(uuidv4())} label="Refresh" />
    </div>
  );
};
