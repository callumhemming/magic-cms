import React, { useState, useEffect, useRef } from "react";
import { Typography } from "antd";


interface Params {
  name: string;
  addChangeToStack: any;
}

export default function Name({ name, addChangeToStack }: Params): JSX.Element {
  const [Name, setName] = useState(name);
  const { Paragraph, Title } = Typography;
  const renderCount = useRef(0);

  useEffect(() => {
    addChangeToStack({ newData: Name, column: "name" });
  }, [Name]);

  return (
    <>
      <Title level={2}>Name:</Title>

      <Paragraph
        editable={{
          tooltip: "click to edit text",
          onChange: e => {
            setName(e);
          },
        }}
      >
        {Name}
      </Paragraph>
    </>
  );
}
