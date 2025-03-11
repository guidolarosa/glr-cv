import clsx from "clsx";

export function H1(props: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      {...props}
      className={clsx(
        "scroll-m-20 text-3xl font-extrabold tracking-tight",
        props.className
      )}
    />
  );
}

export function H2(props: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      {...props}
      className={clsx(
        "scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-xl",
        props.className
      )}
    />
  );
}

export function H3(props: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      {...props}
      className={clsx("scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-lg", props.className)}
    />
  );
}

export function P(props: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      {...props}
      className={clsx(
        "leading-5 [&:not(:first-child)]:mt-6 text-sm",
        props.className
      )}
    />
  );
}

export function STRONG(props: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <strong
      {...props}
      className="leading-5 [&:not(:first-child)]:mt-6 text-sm font-bold"
    />
  );
}
