"use client";

import Link from "next/link";

export default function GlobalError() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center">
      <h1 className="text-4xl font-bold mb-4 text-red-600">
        Something went wrong
      </h1>
      <p className="mb-6 text-gray-700">
        An unexpected error occurred. Please try again or contact support if the
        problem persists.
      </p>
      <Link
        href="/"
        className=" text-[var(--color-gray)] rounded-lg font-semibold hover:bg-royalblue-200 transition-colors underline hover:no-underline"
      >
        Go Home
      </Link>
    </div>
  );
}
