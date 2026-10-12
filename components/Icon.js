import * as L from "lucide-react";
export default function Icon({ name, ...p }) {
  const C = L[name] || L.Music;
  return <C {...p} />;
}
