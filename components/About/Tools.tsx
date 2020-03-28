import * as React from "react";

interface ToolsProps {}

export const Tools: React.FC<ToolsProps> = () => (
  <div className="block">
    <h6>Инструменты:</h6>
    <ul>
      <li>VS Code</li>
      <li>Figma</li>
      <li>Photoshop</li>
      <li>Illustrator</li>
    </ul>
  </div>
);
