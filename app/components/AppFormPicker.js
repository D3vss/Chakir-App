import { useFormikContext } from "formik";
import React from "react";
import AppPicker from "./AppPicker";

function AppFormPicker({ data, name, placeholder }) {
  const { setFieldValue } = useFormikContext();
  return (
    <AppPicker
      data={data}
      placeholder={placeholder}
      onSelectedItem={(item) => setFieldValue(name, item.label)}
    />
  );
}

export default AppFormPicker;
