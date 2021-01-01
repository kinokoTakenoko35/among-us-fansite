import Link from "next/link";
import { NextPage } from "next";

//Components
import { Main } from "./components/Main";
import { config } from "../../site.config";
import { PageSEO } from "./components/PageSEO";

const Page: NextPage = () => {
  return (
    <>
      <PageSEO
        title={config.siteMeta.title}
        description={config.siteMeta.description}
        path="/"
        removeSiteNameTitle={true}
      />
      <Main />
    </>
  );
};

export default Page;
