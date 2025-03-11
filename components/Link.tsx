/* eslint-disable @typescript-eslint/no-explicit-any */
import clsx from "clsx";
import Link from "next/link";

const NextLink = (props: any) => {
  return <Link {...props} className={clsx(props.className, 'text-emerald-500 hover:text-emerald-300')} />
}

export default NextLink;