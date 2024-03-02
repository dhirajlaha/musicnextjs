import React from "react";

function CommonCardText({ Heading, Para }: { Heading: string; Para: string }) {
  return (
    <div className="text-center">
      <h2 className="text-base text-teal-600 font-semibold uppercase tracking-wide">
        {Heading}
      </h2>
      <p className="mt-2 text-3xl tracking-tight text-white font-extrabold leading-8 sm:text-4xl">
        {Para}
      </p>
    </div>
  );
}

export default CommonCardText;
