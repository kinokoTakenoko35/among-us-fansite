import { NextPage } from "next";
import { PageSEO } from "./components/PageSEO";

const Page: NextPage = () => {
  return (
    <>
      <PageSEO title="About" path="/about" />
      <section className="about">
        <h1 className="about-title">About</h1>
        <div className="about-body">
          <p>
            このサイトはAmong
            usの最新動画を簡単に各プラットフォームから検索できるサイトです。
          </p>
        </div>
      </section>
    </>
  );
};

export default Page;
