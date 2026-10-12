import { INSTAGRAM, YOUTUBE,  team, teamStats } from "@/lib/data";
import { Instagram, Youtube } from "lucide-react";

import { H } from "@/lib/functions"
import Icon from "@/components/Icon";


export default function Team() {
    return (
      <>
        <section className="section" id="team">
          <H eyebrow="Our Team" a="Meet Our" b="Creative Team" sub="Passionate people who make every event special" />
          <div className="team-wrap">
            <div className="team">
              {team.map((t) => (
                <article key={t.name} className="member">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={t.img} alt={t.name} loading="lazy" />
                  <div className="m-body">
                    <h3>{t.name}</h3>
                    <p>{t.role}</p>
                    <div className="soc">
                      {t.social.map((s) => (
                        <a key={s} href={s === "ig" ? INSTAGRAM : YOUTUBE} target="_blank" rel="noreferrer" aria-label={s === "ig" ? "Instagram" : "YouTube"}>
                          {s === "ig" ? <Instagram size={15} /> : <Youtube size={15} />}
                        </a>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <ul className="tstats">
              {teamStats.map((s) => (
                <li key={s.l}><Icon name={s.icon} size={30} /><div><b>{s.n}</b><span>{s.l}</span></div></li>
              ))}
            </ul>
          </div>
        </section>
      </>
    )
}