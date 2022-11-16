import { BrowserRouter as Router } from "react-router-dom";
import { ErrorBoundary } from "@sentry/react";
import ErrorFallbackComponent from "./components/ErrorBoundary/ErrorFallbackComponent";

const App = () => {
  return (
    <Router basename="/book-my-movie/">
        <ErrorBoundary fallback={<ErrorFallbackComponent />}>
          <h1>Home Page</h1>
        </ErrorBoundary>
    </Router>
  );
};

export default App;
