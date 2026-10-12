import { H } from "@/lib/functions"
import { services } from "@/lib/data";
import Icon from "@/components/Icon";
import Crumbs from "@/components/Crumbs";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("services");

export default function Services() {
    return (
      <>
        <section className="section" id="services">
          <Crumbs page="services" />
          <H eyebrow="Our Services" a="Events" b="We Cover" sub="Music for every moment, memories for a lifetime" />
          <div className="svc-grid">
            {services.map((s) => (
              <article key={s.title} className="svc">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.img} alt={s.title} loading="lazy" />
                <div className="svc-body">
                  <span className="svc-ico"><Icon name={s.icon} size={20} /></span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </>
    )
}