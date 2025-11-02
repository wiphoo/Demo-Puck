"use client";

import { Puck } from "@measured/puck";
import config from "../puck/config";
import "@measured/puck/puck.css";

// Initial data for the editor
const initialData = {
  content: [
    {
      type: "HeroBlock",
      props: {
        id: "hero-1",
        title: "Welcome to Puck Editor Demo",
        subtitle: "Drag and drop components to build your page",
        backgroundImage: "",
      },
    },
    {
      type: "HeadingBlock",
      props: {
        id: "heading-1",
        title: "Getting Started",
        level: "2",
      },
    },
    {
      type: "TextBlock",
      props: {
        id: "text-1",
        text: "This is a demonstration of the Puck editor. You can drag components from the left sidebar and drop them onto the canvas. Try editing the components by clicking on them!",
        size: "medium",
      },
    },
    {
      type: "ButtonBlock",
      props: {
        id: "button-1",
        label: "Learn More",
        href: "https://github.com/measuredco/puck",
        variant: "primary",
      },
    },
  ],
  root: { props: {} },
};

export default function EditorPage() {
  return (
    <div style={{ height: "100vh" }}>
      <Puck
        config={config}
        data={initialData}
        onPublish={async (data) => {
          console.log("Published data:", data);
          alert("Page published! Check console for data.");
        }}
      />
    </div>
  );
}
