import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { blogPosts } from "../../data/blogPosts";
import { formatDate } from "../../utils/helpers";

export default function BlogPreview() {
  const posts = blogPosts.slice(0, 3);
  return (
    <section className="section-pad bg-soft">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Insights & Inspiration" title="From the Studio Journal" />
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary"
          >
            View All Articles <ArrowRight size={15} />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              to={`/blog/${post.slug}`}
              key={post.slug}
              className="group block bg-white"
            >
              <div className="aspect-[16/11] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-premium group-hover:scale-[1.05]"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-muted">
                  <span className="font-medium text-primary">{post.category}</span>
                  <span>&middot;</span>
                  <span>{formatDate(post.date)}</span>
                </div>
                <h3 className="mt-3 font-display text-lg leading-snug text-ink">
                  {post.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-muted">{post.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  Read More <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
