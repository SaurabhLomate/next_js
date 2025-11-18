import React from "react";

const Student = async ({ params }) => {
  const res = await params;
  console.log(res);

  return <div>Student</div>;
};

export default Student;
