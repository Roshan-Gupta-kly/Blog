import React, { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

function Home() {

  const {Data: blogs, IsPending, error} = useFetch('http://localhost:8000/blogs') // here, Data: blogs means giving a alternative name blogs to Data within this file so we can access Data by using blogs. it simply like giving another name to Data.
  return (
    <div className="home">
      { error && <div><strong>{ error }</strong></div>}
      {IsPending && <div><strong>Loading......</strong></div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
}

export default Home;