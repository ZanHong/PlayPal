import React from "react";
import { Select } from "react-materialize";

export default function SearchForm() {
  return (
    <Select
      id="Select-9"
      multiple={false}
      onChange={function noRefCheck() { }}
      options={{
        classes: '',
        dropdownOptions: {
          alignment: 'left',
          autoTrigger: true,
          closeOnClick: true,
          constrainWidth: true,
          coverTrigger: true,
          hover: false,
          inDuration: 150,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 250
        }
      }}
      value=""
    >
      <option
        disabled
        value=""
      >
        Choose a category
      </option>
      <option value="1">
        Physical
      </option>
      <option value="2">
        Social
      </option>
      <option value="3">
        Emotional
      </option>
      <option value="4">
        Cognitive
      </option>
      <option value="5">
        Language
      </option>
      <option value="6">
        All
      </option>
    </Select>

  )
}