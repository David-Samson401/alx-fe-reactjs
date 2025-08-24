import React from "react"; 
import FormikForm from "./components/FormikForm";
import RegistrationForm from "./components/RegistrationForm";

function App() {
  return (
    <div className="p-6">
      <RegistrationForm />
      <hr className="my-8" />
      <FormikForm />
    </div>
  );
}

export default App;
