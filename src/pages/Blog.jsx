import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import useSEO from "../hooks/useSEO";
import { SEO } from "../utils/constants";
import PageHero from "../components/common/PageHero";
import Container from "../components/common/Container";
import { blogPosts, blogCategories } from "../data/blogPosts";
import { formatDate } from "../utils/helpers";

export default function Blog() {
  useSEO(SEO.blog.title, SEO.blog.description);
  const [active, setActive] = useState("All");

  const [featured, ...rest] = blogPosts;
  const filtered =
    active === "All" ? rest : rest.filter((p) => p.category === active);

  return (
    <>
      <PageHero
        eyebrow="Journal"
        title="Interior Design Insights"
        breadcrumb={[{ label: "Blog" }]}
        image="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1920&auto=format&fit=crop"
      />

      <section className="section-pad bg-white">
        <Container>
          <Link
            to={`/blog/${featured.slug}`}
            className="group grid grid-cols-1 gap-8 overflow-hidden border border-line lg:grid-cols-2"
          >
            <div className="aspect-[16/11] overflow-hidden lg:aspect-auto">
              <img
                src={featured.image}
                alt={featured.title}
                loading="eager"
                className="h-full w-full object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center p-8 lg:p-12">
              <div className="flex items-center gap-3 text-xs text-muted">
                <span className="font-medium text-primary">{featured.category}</span>
                <span>&middot;</span>
                <span>{formatDate(featured.date)}</span>
              </div>
              <h2 className="heading-lg mt-4 font-display">{featured.title}</h2>
              <p className="body-md mt-4">{featured.excerpt}</p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                Read Article <ArrowRight size={15} />
              </span>
            </div>
          </Link>
        </Container>
      </section>

      <section className="section-pad bg-soft pt-0 sm:pt-0 lg:pt-0">
        <Container>
          <div className="flex flex-wrap gap-3">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`min-h-[44px] rounded-full border px-5 text-sm font-medium transition-colors duration-200 ${
                  active === cat
                    ? "border-primary bg-primary text-white"
                    : "border-line bg-white text-ink/70 hover:border-primary hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post) => (
              <Link to={`/blog/${post.slug}`} key={post.slug} className="group block bg-white">
                <div className="aspect-[16/11] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-muted">
                    <span className="font-medium text-primary">{post.category}</span>
                    <span>&middot;</span>
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <h3 className="mt-3 font-display text-lg leading-snug">{post.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-muted">{post.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                    Read More <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-14 flex items-center justify-center gap-2">
            {[1, 2, 3].map((n) => (
              <button
                key={n}
                className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium transition-colors ${
                  n === 1 ? "bg-primary text-white" : "border border-line text-ink/70 hover:border-primary"
                }`}
              >
                {n}
              </button>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
