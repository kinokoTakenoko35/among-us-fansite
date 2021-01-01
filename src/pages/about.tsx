import { NextPage } from "next";
import { ContentWrapper } from "./components/ContentWrapper";
import { PageSEO } from "./components/PageSEO";

const Page: NextPage = () => {
  return (
    <>
      <PageSEO title="About" path="/about" />
      <ContentWrapper>
        <section className="about">
          <div className="about-article">
            <h1 className="about-title">About</h1>
            <div className="about-ja">
              <p>
                このサイトはAmong
                usの最新動画を簡単に各プラットフォームから検索できるサイトです。
                <br />
                YoutubeAPIを使用したくて作成したお遊びサイト。
              </p>
            </div>
            <div className="about-en">
              <p>
                This site makes it easy to search for the latest Among us videos
                from various platforms.
                <br />
                Just fan site I created to use the Youtube API.
              </p>
            </div>
          </div>
        </section>
      </ContentWrapper>
    </>
  );
};

export default Page;
