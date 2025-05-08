import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useDispatch, useSelector } from "react-redux";
import { increment, reset, toggleDisable } from "../redux/counterSlice";
import type { RootState } from "../redux/store";

const ClickCounter = () => {
  const dispatch = useDispatch();
  const { value, disabled } = useSelector((state: RootState) => state.counter);

  return (
    <ButtonGroup variant="contained" sx={{ display: "flex", gap: 2, mb: 4 }}>
      <Button
        onClick={() => dispatch(increment())}
        disabled={disabled}
        sx={{ minWidth: 100 }}
      >
        CLICK: {value}
      </Button>
      <Button onClick={() => dispatch(reset())}>CLEAR</Button>
      <Button onClick={() => dispatch(toggleDisable())}>
        {disabled ? "ABLE" : "DISABLE"}
      </Button>
    </ButtonGroup>
  );
};

export default ClickCounter;
