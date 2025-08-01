import { Builder } from "@builder.io/react";
import {
  SButton,
  SInput,
  SCheckbox,
  SSelect,
  STextarea,
} from "@chargebee/sting-react";

Builder.registerComponent(SButton, {
  name: "Button",
  inputs: [
    { name: "children", type: "text", defaultValue: "Click me" },
    {
      name: "variant",
      type: "string",
      enum: ["primary", "secondary", "destructive", "link"],
      defaultValue: "primary",
    },
    {
      name: "size",
      type: "string",
      enum: ["sm", "md", "lg"],
      defaultValue: "md",
    },
    { name: "loading", type: "boolean" },
    { name: "disabled", type: "boolean" },
    { name: "fullWidth", type: "boolean" },
    { name: "icon", type: "string" }, // Optional: if using icon name
    {
      name: "type",
      type: "string",
      enum: ["button", "submit", "reset"],
      defaultValue: "button",
    },
    { name: "onClick", type: "event" },
  ],
});
Builder.registerComponent(SInput, {
  name: "Input",
  inputs: [
    { name: "label", type: "text" },
    { name: "placeholder", type: "text", defaultValue: "Enter text..." },
    {
      name: "type",
      type: "string",
      enum: ["text", "email", "password", "number", "search"],
      defaultValue: "text",
    },
    { name: "value", type: "text" },
    { name: "disabled", type: "boolean" },
    { name: "required", type: "boolean" },
    { name: "error", type: "text" },
    { name: "helpText", type: "text" },
    { name: "onChange", type: "event" },
    { name: "onBlur", type: "event" },
  ],
});
Builder.registerComponent(SCheckbox, {
  name: "Checkbox",
  inputs: [
    { name: "label", type: "text", defaultValue: "Accept terms" },
    { name: "checked", type: "boolean" },
    { name: "disabled", type: "boolean" },
    { name: "required", type: "boolean" },
    { name: "error", type: "text" },
    { name: "onChange", type: "event" },
  ],
});
Builder.registerComponent(SSelect, {
  name: "Select",
  inputs: [
    {
      name: "options",
      type: "list",
      subFields: [
        { name: "label", type: "text" },
        { name: "value", type: "text" },
      ],
      defaultValue: [
        { label: "Option 1", value: "option1" },
        { label: "Option 2", value: "option2" },
      ],
    },
    { name: "label", type: "text" },
    { name: "placeholder", type: "text", defaultValue: "Choose an option" },
    { name: "disabled", type: "boolean" },
    { name: "required", type: "boolean" },
    { name: "error", type: "text" },
    { name: "onChange", type: "event" },
  ],
});
Builder.registerComponent(STextarea, {
  name: "Textarea",
  inputs: [
    { name: "label", type: "text" },
    { name: "placeholder", type: "text", defaultValue: "Enter your message" },
    { name: "rows", type: "number", defaultValue: 4 },
    { name: "value", type: "text" },
    { name: "disabled", type: "boolean" },
    { name: "required", type: "boolean" },
    { name: "error", type: "text" },
    { name: "helpText", type: "text" },
    { name: "onChange", type: "event" },
    { name: "onBlur", type: "event" },
  ],
});
Builder.register("editor.settings", {
  hideDefaultComponents: true,
  customComponents: [
    "Button",
    "Input",
    "Checkbox",
    "Select",
    "Textarea",
    // ... list your registered components
  ],
});
