import React, { useEffect } from "react";

function UseTitle(title) {
  useEffect(() => {
    document.title = `${title} | Shopping Cart`;
  }, [title]);
  return null;
}

export default UseTitle;
