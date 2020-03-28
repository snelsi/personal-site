import * as React from "react";

interface LanguagesProps {}

export const Languages: React.FC<LanguagesProps> = () => (
  <div className="block">
    <h6>Знание языков:</h6>
    <ul>
      <li>Русский - родной</li>
      <li>Украинский - родной</li>
      <li>Английский - уверенный</li>
    </ul>
  </div>
);
