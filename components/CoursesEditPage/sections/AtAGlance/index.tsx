import React, { useState, useEffect, useRef } from "react";
import { Typography } from "antd";
import { v4 } from "uuid";

interface Params {
  ataglance: {
    data: string[];
  };
  addChangeToStack: any;
}

export default function AtAGlance({
  ataglance,
  addChangeToStack,
}: Params): JSX.Element {
  const [atAGlance, setAtAGlance] = useState(ataglance.data);
  const { Paragraph, Title } = Typography;
  const renderCount = useRef(0);

  useEffect(() => {
    addChangeToStack({
      newData: JSON.stringify({ data: atAGlance }),
      column: "ataglance",
    });
  }, [atAGlance]);

  return (
    <>
      <Title level={2}>At a glance:</Title>
      {atAGlance.map((atAGlanceItem, index) => {
        return (
          <Paragraph
            key={v4()}
            editable={{
              tooltip: "click to edit text",
              onChange: e => {
                setAtAGlance([
                  ...atAGlance.slice(0, index),
                  e,
                  ...atAGlance.slice(index + 1),
                ]);
              },
            }}
          >
            {atAGlanceItem}
          </Paragraph>
        );
      })}
    </>
  );
}
