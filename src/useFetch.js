import React, { useState, useEffect } from "react";

const useFetch = (url) => {
  const [Data, setData] = useState(null); // useState(null) keeps null value to Data const variable and setData is function where it called to change the value of Data dynamically.
  const [IsPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {       // useEffect is the type of hook which is called when the page is rendered.
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error(
              " Error: Could not fetch the data for that resources!!!"
            );
          }
          return res.json();
        })
        .then((data) => {
          setData(data); // here, setData(data) is function where it makes value of Data const to the value of the data given.
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          setData(null);
          setError(err.message);
          setIsPending(false);
        });
    }, 500);
  }, [url]); // here square bracket is given to control the useEffect hook to be called again and again when page is render. [] empty makes the dependence of useEffect a empty array which is called only once when page is render and when something is added in it it depends on that value because whenever the page is render due to that value useEffect is called. simply it means that it called when page is render due to the value in that [].

  return { Data, IsPending, error} // it returns value to useFetch() and it is called in home.js.
};

export default useFetch
