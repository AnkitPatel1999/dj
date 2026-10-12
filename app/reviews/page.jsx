
import { H } from "@/lib/functions"
import { reviews } from "@/lib/data";
import { Star } from "lucide-react";
import Crumbs from "@/components/Crumbs";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("reviews");


export default function Reviews() {
    return (
      <>
        <section className="section" id="reviews">
          <Crumbs page="reviews" />
          <H eyebrow="Clients Say" a="What People Say" b="About Jaguar Sound" />
          <div className="reviews">
            {reviews.map((r) => (
              <article key={r.who} className="review">
                <h3>&ldquo;{r.title}&rdquo;</h3>
                <p>&ldquo;{r.text}&rdquo;</p>
                <footer>
                  <span className="av">{r.who[0]}</span>
                  <div><b>{r.who}</b><small>{r.event}</small></div>
                  <span className="stars" aria-label="5 stars">{Array.from({ length: 5 }, (_, i) => <Star key={i} size={13} fill="currentColor" />)}</span>
                </footer>
              </article>
            ))}
          </div>
        </section>
      </>
    )
}