import React from "react";

const FormTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative border-2 text-xl border-amber-600 rounded-2xl my-3 mx-10">
      <div className="flex justify-between items-center border-2 border-amber-600 px-10 py-3 rounded-2xl relative left-1 top-1">
        {children}
      </div>
    </div>
  );
};

export default FormTemplate;
