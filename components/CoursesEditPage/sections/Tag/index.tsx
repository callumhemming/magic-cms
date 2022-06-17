import React, { useState, useEffect, useRef } from "react";
import { Typography } from "antd";

interface Params {
  tag: string;
  addChangeToStack: any;
}

export default function Tag({ tag, addChangeToStack }: Params): JSX.Element {
  const [Tag, setTag] = useState(tag);
  const { Paragraph, Title } = Typography;
  const renderCount = useRef(0);

  useEffect(() => {
    addChangeToStack({ newData: Tag, column: "tag" });
  }, [Tag]);

  return (
    <>
      <Title level={2}>Tag:</Title>

      <Paragraph
        editable={{
          tooltip: "click to edit text",
          onChange: e => {
            setTag(e);
          },
        }}
      >
        {Tag}
      </Paragraph>
    </>
  );
}
