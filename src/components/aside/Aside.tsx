import clsx from "clsx";

type Props = {
  style: string;
};

export function Aside({ style }: Props) {
  // console.log(style);
  return (
    <aside className={clsx(style, "main__left-side col__aside rounded-tl-2xl")}>
      <div className="main__img main__img--logo" />
      <div className="main__img main__img--1" />
      <div className="main__img main__img--2" />
      <div className="main__img main__img--3" />
      <div className="main__img main__img--4" />
      <div className="main__img main__img--5" />
      <div className="main__img main__img--6" />
    </aside>
  );
}
