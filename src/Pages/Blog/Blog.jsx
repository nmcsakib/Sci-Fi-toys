import React from 'react';

const Blog = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-16 mx-auto flex flex-wrap" bis_skin_checked="1">
        <h2 class="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
        <div class="md:w-3/5 md:pl-6" bis_skin_checked="1">
          <p class="leading-relaxed text-base">An access token is a credential that is used to access protected resources or perform certain actions on behalf of an authenticated user. On the other hand a refresh token is a credential that is used to obtain a new access token once the previous one expires. <br />
            When a user logs in to an application, the authentication server verifies their credentials and generates an access token and a refresh token. These tokens are returned to the client application.</p>
          <div class="flex md:mt-4 mt-6" bis_skin_checked="1">
            <a class="text-indigo-500 inline-flex items-center ml-4">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="container px-5 py-16 mx-auto flex flex-wrap" bis_skin_checked="1">
        <h2 class="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5">Compare SQL and NoSQL databases?</h2>
        <div class="md:w-3/5 md:pl-6" bis_skin_checked="1">
          <p class="leading-relaxed text-base">SQL stands for Structured Query Language and is a type of database that uses a structured approach to store and manage data. It is based on relational database management systems (RDBMS) and uses tables with predefined columns and rows to store data. NoSQL, on the other hand, stands for Not Only SQL and is a type of database that does not use a structured approach to store and manage data. It is based on non-relational database management systems (NRDBMS) and can use various data models such as document-oriented, key-value, graph, or column-oriented.</p>
          <div class="flex md:mt-4 mt-6" bis_skin_checked="1">
            <a class="text-indigo-500 inline-flex items-center ml-4">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="container px-5 py-16 mx-auto flex flex-wrap" bis_skin_checked="1">
        <h2 class="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5">What is express js? and What is Nest JS ?</h2>
        <div class="md:w-3/5 md:pl-6" bis_skin_checked="1">
          <p class="leading-relaxed text-base">Express JS is a popular and widely used web application framework for Node.js. It provides a set of features and tools for building web applications and APIs, including routing, middleware, and templating. Express JS is known for its simplicity and flexibility, allowing developers to build scalable and efficient applications. <br />
            Nest JS is a relatively new framework for building server-side applications with Node.js and TypeScript. It is built on top of Express JS and provides additional features such as dependency injection, modular architecture, and easy integration with other libraries.</p>
          <div class="flex md:mt-4 mt-6" bis_skin_checked="1">
            <a class="text-indigo-500 inline-flex items-center ml-4">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="container px-5 py-16 mx-auto flex flex-wrap" bis_skin_checked="1">
        <h2 class="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5">What is MongoDB aggregate and how does it work?</h2>
        <div class="md:w-3/5 md:pl-6" bis_skin_checked="1">
          <p class="leading-relaxed text-base">MongoDB is a document-oriented database system that uses a NoSQL approach. It provides an aggregation framework that allows users to process and analyze data in various ways. The aggregation framework is a set of functions that allow users to perform complex queries on data stored in MongoDB.</p>
          <div class="flex md:mt-4 mt-6" bis_skin_checked="1">
            <a class="text-indigo-500 inline-flex items-center ml-4">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;