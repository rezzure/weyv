import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const variants = {
  primary:
    "bg-primary text-white hover:bg-primary-dark focus-visible:ring-primary/40",
  outline:
    "border border-ink/20 text-ink hover:border-primary hover:text-primary focus-visible:ring-primary/30",
  ghostLight:
    "border border-white/40 text-white hover:bg-white hover:text-ink focus-visible:ring-white/40",
  dark: "bg-ink text-white hover:bg-ink-secondary focus-visible:ring-ink/40",
};

const Button = forwardRef(
  (
    {
      children,
      to,
      href,
      onClick,
      type = "button",
      variant = "primary",
      icon = true,
      className = "",
      ...rest
    },
    ref
  ) => {
    const base = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 min-h-[44px] text-sm font-medium tracking-wide transition-all duration-300 ease-premium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${variants[variant]} ${className}`;

    const content = (
      <>
        <span>{children}</span>
        {icon && (
          <ArrowUpRight
            size={16}
            className="transition-transform duration-300 ease-premium group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        )}
      </>
    );

    if (to) {
      return (
        <Link ref={ref} to={to} className={`group ${base}`} {...rest}>
          {content}
        </Link>
      );
    }
    if (href) {
      return (
        <a ref={ref} href={href} className={`group ${base}`} {...rest}>
          {content}
        </a>
      );
    }
    return (
      <button
        ref={ref}
        type={type}
        onClick={onClick}
        className={`group ${base}`}
        {...rest}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
