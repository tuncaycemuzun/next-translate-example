import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { useRouter } from "next/router";
export default function Home() {
  const { t } = useTranslation();
  let router = useRouter();

  return (
    <main>
      <div className="container">
        <div>{t("home:homePage")}</div>
        <div>{t("home:learningNextTranslate")}</div>
        <ul>
          {router.locales.map((locale) => {
            return (
            <li key={locale}>
              <Link href={router.asPath} locale={locale}>{locale}</Link>
            </li>
            )
          })}
        </ul>
      </div>
      <style jsx global>
        {`
          .container {
            width: 100%;
            height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </main>
  );
}
