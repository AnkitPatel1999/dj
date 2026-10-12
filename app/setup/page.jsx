import { Check } from "lucide-react";

import { H } from "@/lib/functions"
import { setup } from "@/lib/data";
import Icon from "@/components/Icon";


export default function Setup() {
    return (
      <>
        <section className="section setup-sec" id="setup">
          <H eyebrow="Our Setup" a="Our Professional" b="Setup" sub="High bass, crystal clear sound and stunning lighting to make your event unforgettable" />
          <div className="setup-grid">
            {setup.map((s) => (
              <article key={s.title} className="card">
                <header><span className="ico-box"><Icon name={s.icon} size={22} /></span><h3>{s.title}</h3></header>
                <ul>{s.items.map((x) => <li key={x}><Check size={13} /> {x}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>
      </>
    )
}