// HelpSection.jsx

import React from "react";

function HelpSection() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">
        Introducing JavaScript for Beginners
      </h1>
      <p className="text-gray-700 mb-4">
        Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At
        arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae
        feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget.
        Eleifend egestas fringilla sapien.
      </p>
      <p className="text-gray-700 mb-4">
        Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim.
        Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent
        donec est. Odio penatibus risus viverra tellus varius sit neque erat
        velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
        risus enim. Mattis mauris semper sed amet vitae sed turpis id.
      </p>
      <div className="flex items-center mb-4">
        <div className="bg-purple-100 p-2 rounded-full mr-2">
          <svg
            className="w-6 h-6 text-purple-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"
            />
          </svg>
        </div>
        <p className="text-gray-700">
          Data types. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
          blanditiis ratione.
        </p>
      </div>
      <div className="flex items-center mb-4">
        <div className="bg-purple-100 p-2 rounded-full mr-2">
          <svg
            className="w-6 h-6 text-purple-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0l-5 5m5-5H9m10 11l-5-5m0 0l-5 5"
            />
          </svg>
        </div>
        <p className="text-gray-700">
          Loops. Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
          qui lorem cupidatat commodo.
        </p>
      </div>
      <div className="flex items-center mb-4">
        <div className="bg-purple-100 p-2 rounded-full mr-2">
          <svg
            className="w-6 h-6 text-purple-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </div>
        <p className="text-gray-700">
          Events. Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.
          Et magna sit morbi lobortis.
        </p>
      </div>
      <h1 className="text-3xl font-bold mb-4 mt-8">
        From beginner to expert in 3 hours
      </h1>
      <p className="text-gray-700 mb-4">
        Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in.
        Convallis arcu ipsum urna nibh. Pharetra, quismod vitae interdum mauris
        enim, consequat vulputate nibh. Maecenas pellentesque id sed tellus
        mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi.
        Pellentesque nam sed nullam sed diam turpis ipsum eu a sed convallis
        diam.
      </p>
      <blockquote className="bg-gray-100 p-4 rounded-lg mb-4">
        <p className="text-gray-700 italic">
          "Vel ultricies morbi odio facilisi ultrices accumsan donec lacus
          purus. Lectus nibh ullamcorper ac dictum justo in euismod. Risus
          aenean ut elit massa. In amet aliquet eget cras. Sem volutpat enim
          tristique."
        </p>
        <cite className="text-gray-700 not-italic block mt-2">
          Maria Hill - Marketing Manager
        </cite>
      </blockquote>
      <p className="text-gray-700 mb-4">
        Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim.
        Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent
        donec est. Odio penatibus risus viverra tellus varius sit neque erat
        velit.
      </p>
      <img
        className="rounded-lg mb-4"
        src="https://via.placeholder.com/600x400"
        alt="Person"
      />
    </div>
  );
}

export default HelpSection;
