import * as runtime from "react/jsx-runtime";
import type { AnchorHTMLAttributes, ComponentType } from "react";

/** External links in prose open in a new tab; internal links stay in place. */
function Anchor({ href = "", children, ...rest }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const external = /^https?:\/\//.test(href);
  const target = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <a href={href} {...target} {...rest}>
      {children}
    </a>
  );
}

const mdxComponents = { a: Anchor };

/**
 * Velite compiles each note's MDX to a "function-body" string that reads the
 * JSX runtime from `arguments[0]` and returns `{ default: Component }`. This
 * runs at build time during static export over trusted, in-repo content (never
 * user input), so constructing the component from that string is safe here.
 */
function getMDXComponent(code: string): ComponentType<{ components?: typeof mdxComponents }> {
  const fn = new Function(code);
  return fn(runtime).default;
}

export function MDXContent({ code }: { code: string }) {
  const Component = getMDXComponent(code);
  // The compiled MDX component is stable for a given `code` and rendered once at
  // build time (static export) with no state to reset — the state-loss concern
  // behind `static-components` does not apply to this content.
  // eslint-disable-next-line react-hooks/static-components
  return <Component components={mdxComponents} />;
}
