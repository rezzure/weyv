import { useParams, Navigate, Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import useSEO from "../hooks/useSEO";
import PageHero from "../components/common/PageHero";
import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";
import { getPostBySlug, blogPosts } from "../data/blogPosts";
import { formatDate } from "../utils/helpers";

export default function BlogDetails() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) return <Navigate to="/blog" replace />;

  useSEO(`${post.title} | WEYV Journal`, post.excerpt);

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={post.category}
        title={post.title}
        breadcrumb={[{ label: "Blog", path: "/blog" }, { label: post.title }]}
        image={post.image}
      />

      <section className="section-pad bg-white">
        <Container className="max-w-3xl">
          <div className="flex items-center gap-3 text-sm text-muted">
            <span>{post.author}</span>
            <span>&middot;</span>
            <span>{formatDate(post.date)}</span>
          </div>

          <div className="prose mt-8 flex flex-col gap-5">
            {post.content.map((para, i) => (
              <p key={i} className="body-md text-ink/80">
                {para}
              </p>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-pad bg-soft">
        <Container>
          <SectionHeading eyebrow="Continue Reading" title="Related Articles" />
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {related.map((p) => (
              <Link to={`/blog/${p.slug}`} key={p.slug} className="group block bg-white">
                <div className="aspect-[16/11] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-primary">{p.category}</span>
                  <h3 className="mt-2 font-display text-lg leading-snug">{p.title}</h3>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                    Read More <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
