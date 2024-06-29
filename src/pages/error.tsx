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
    <div className="container relative min-h-screen mx-auto text-center">
      <div className="flex flex-col w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
          Uh-oh
        </h1>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Sorry, an unexpected error has occurred.
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {getRouteErrorMessage()}
        </p>
        <Button type="button">Back to home page</Button>
      </div>
    </div>
  );
}
