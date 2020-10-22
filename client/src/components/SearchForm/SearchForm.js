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
      <option value="Physical">
        Physical
      </option>
      <option value="Social">
        Social
      </option>
      <option value="Emotional">
        Emotional
      </option>
      <option value="Cognitive">
        Cognitive
      </option>
      <option value="Language">
        Language
      </option>
      <option value="All">
        All
      </option>
    </Select>

  )
}