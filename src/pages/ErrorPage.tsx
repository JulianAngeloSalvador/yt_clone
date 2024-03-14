import { ErrorResponse, Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError() as ErrorResponse;

  return (
    <section className="flex items-center justify-center h-dvh px-6">
      <div className="w-fluid-300 flex flex-col gap-2">
        <header className="flex items-center">
          <h1 className="text-subheadline px-4 relative after:absolute after:top-4 w-max after:right-0 after:bg-cta/55 after:w-0.5 after:h-3/5 ">
            {error.status}
          </h1>
          <p className="text-main-fs px-4 pt-2">{error.statusText}</p>
        </header>
        <Link
          to={"/"}
          className="bg-cta px-4 py-1 rounded-md text-center text-nowrap"
        >
          Go back home
        </Link>
      </div>
    </section>
  );
}
