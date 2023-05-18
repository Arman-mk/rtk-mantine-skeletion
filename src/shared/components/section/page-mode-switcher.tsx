import React, { FC, memo, useEffect, useState } from "react";
import { ActionIcon, Tooltip } from "@mantine/core";
import { IconLayoutGrid, IconTable } from "@tabler/icons-react";

type PageModeType = "list" | "grid";

interface IPageModeSwitcherProps {
  listMode: boolean;
  onChange: (mode: PageModeType) => void;
}

const PageModeSwitcher:FC<IPageModeSwitcherProps> = ({ listMode, onChange }) => {
  const [isList, setIsList] = useState<boolean>(listMode);

  useEffect(() => {
    onChange(isList ? "list" : "grid");
  }, [isList]);

  const changeHandler = () => {
    setIsList((prev) => !prev);
  };

  return (
    <Tooltip label={isList ? "Card mode" : "Table mode"} >
      <ActionIcon
        size="large"
        onClick={changeHandler}
        className="mr-3"
      >
        {!isList ? <IconTable /> : <IconLayoutGrid />}
      </ActionIcon>
    </Tooltip>
  );
};

export default memo(PageModeSwitcher);
