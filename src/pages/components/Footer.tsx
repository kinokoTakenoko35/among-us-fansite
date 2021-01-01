import { ContentWrapper } from "../components/ContentWrapper";
import { config } from "../../../site.config";

export const Footer: React.FC = () => (
  <footer className="site-footer">
    <ContentWrapper>
      <p>© {config.siteMeta.name}</p>
    </ContentWrapper>
  </footer>
);
