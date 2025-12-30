import { useState, useEffect } from "react";

type BarWidth = {
  value: number;
  unit: string;
};

type TimeLeftBarProps = {
  barWidth: BarWidth;
  barHeight: string;
  barColor: string;
  totalTime: number;
};

function TimeLeftBar({
  barWidth,
  barHeight,
  barColor,
  totalTime,
  callFn,
}: TimeLeftBarProps) {
  const [progress, setProgress] = useState(totalTime);

  useEffect(() => {
    setProgress(0);
    setTimeout(() => {
      callFn();
    }, totalTime);
  }, []);

  const progressBarStyle = {
    width: `${(progress / totalTime) * barWidth.value}` + barWidth.unit,
    backgroundColor: `${barColor}`,
    height: `${barHeight}`,
    borderRadius: "10px",
    transition: `width ${totalTime}ms linear`,
  };

  return <div style={progressBarStyle}></div>;
}

export default TimeLeftBar;
