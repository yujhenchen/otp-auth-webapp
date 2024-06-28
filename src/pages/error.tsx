import { Button } from "flowbite-react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();

  type RouteError = {
    [key: number]: string;
  };

  const routeError: RouteError = {
    400: "Bad Request",
    403: "Forbidden",
    404: "Not Found",
    408: "Request Timeout",
    500: "Internal Server Error",
  };

  const getRouteErrorMessage = (): string =>
    isRouteErrorResponse(error) ? routeError[error.status] : "Unknown error";

  return (
    <div className="container relative min-h-screen mx-auto">
      <h1>Uh-oh</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>{getRouteErrorMessage()}</p>
      <Button type="button">Back to home page</Button>
    </div>
  );
}
