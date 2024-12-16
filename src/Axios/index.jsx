import React, { useState, useEffect } from "react";
import { request } from "../server";

function Useaxios({ url, method = "GET" }){

  const [data, Setdata] = useState([]);
  const [error, Seterror] = useState(null);

  useEffect(() => {
    request({
      url,
      method,
      
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => Setdata(data.data))
      .catch((error) => Seterror(error.message));
  }, []);

  return { data, error };

}
export default Useaxios;
