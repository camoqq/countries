import { ReactNode } from "react";

type infoProps = {
  mode: "hint" | "warning";
  children: ReactNode;
};

export default function Information({ mode, children }: infoProps) {
  if (mode === "hint") {
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );
  }
  return (
    <aside className="infobox infobox-warning warning--medium ">
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
}
