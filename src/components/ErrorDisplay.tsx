export interface ErrorDisplayProps {
  error: Error;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ error }) => {
  return (
    <>
      <h1>{error.name}</h1>
      <h2>{error.message}</h2>
    </>
  );
};

export default ErrorDisplay;
