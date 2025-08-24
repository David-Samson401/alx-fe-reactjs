import React from "react"; 
import formikForm from "./components/formikForm";
import RegistrationForm from "./components/RegistrationForm";

function App() {
  return (
    <div className="p-6">
      <RegistrationForm />
      <hr className="my-8" />
      <formikForm />
    </div>
  );
}

export default App;
