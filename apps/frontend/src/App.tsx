import { useEffect, useState } from "react";
import { Card } from "./components/Card";
import { CodeBlock } from "./components/CodeBolck";
import { Field } from "./components/Field";
import { fetchServerTime } from "./api/fetchServerTime";
import { fetchMetrics } from "./api/fetcMetrics";
import { formatDate } from "./utils/time";

import "./App.css";

function App() {
  const [time, setTime] = useState(0);
  const [isLoadingTime, setIsLoadingTime] = useState(true);
  const [metrics, setMetrics] = useState("");
  const [isLoadingMetrics, setIsLoadingMetrics] = useState(true);
  const [timeDifference, setTimeDifference] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().getTime() / 1000;
      setTimeDifference(currentTime - Number(time));
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);

  useEffect(() => {
    fetchServerTime({ setTime, setIsLoadingTime });
    fetchMetrics({ setMetrics, setIsLoadingMetrics });
    const interval = setInterval(() => {
      setIsLoadingTime(true);
      setIsLoadingMetrics(true);
      setTimeDifference(10);
      fetchServerTime({ setTime, setIsLoadingTime });
      fetchMetrics({ setMetrics, setIsLoadingMetrics });
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <Card isLoading={isLoadingTime}>
        <div className="FieldContainer">
          <Field label="Server time" value={String(time)} />
          <Field
            label="Difference with client time"
            value={formatDate(timeDifference)}
          />
        </div>
      </Card>
      <Card isLoading={isLoadingMetrics}>
        <CodeBlock code={metrics} />
      </Card>
    </div>
  );
}

export default App;
