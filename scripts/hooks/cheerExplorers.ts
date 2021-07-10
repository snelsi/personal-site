import * as React from "react";

let styles = [
  "background: #ceceff",
  "border-radius: 8px",
  "color: black",
  "display: inline-block",
  "font-size: 24px",
  "font-family: 'Montserrat', monospace",
  "font-weight: bold",
  "padding: 4px 18px",
].join(";");

export const useCheerExplorers = () => {
  React.useEffect(() => {
    console.clear();
    console.log("%cHello, fellow hackers! 👾", styles);
    console.log("Got any cool ideas or a desire to work as a team?");
    console.log(
      "Then I'm waiting for your letter %chello@snelsi.com",
      "text-decoration: underline;",
    );
    console.log("Contact me here 👉 https://snelsi.com/contact");
    console.log("Have a good day ʕ•́ᴥ•̀ʔっ♡");
  }, []);
};
