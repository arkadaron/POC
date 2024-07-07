import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CrawlResultList } from "./crawlResult/CrawlResultList";
import { CrawlResultCreate } from "./crawlResult/CrawlResultCreate";
import { CrawlResultEdit } from "./crawlResult/CrawlResultEdit";
import { CrawlResultShow } from "./crawlResult/CrawlResultShow";
import { WebsiteList } from "./website/WebsiteList";
import { WebsiteCreate } from "./website/WebsiteCreate";
import { WebsiteEdit } from "./website/WebsiteEdit";
import { WebsiteShow } from "./website/WebsiteShow";
import { CrawlOptionList } from "./crawlOption/CrawlOptionList";
import { CrawlOptionCreate } from "./crawlOption/CrawlOptionCreate";
import { CrawlOptionEdit } from "./crawlOption/CrawlOptionEdit";
import { CrawlOptionShow } from "./crawlOption/CrawlOptionShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"AXE-Crawler"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="CrawlResult"
          list={CrawlResultList}
          edit={CrawlResultEdit}
          create={CrawlResultCreate}
          show={CrawlResultShow}
        />
        <Resource
          name="Website"
          list={WebsiteList}
          edit={WebsiteEdit}
          create={WebsiteCreate}
          show={WebsiteShow}
        />
        <Resource
          name="CrawlOption"
          list={CrawlOptionList}
          edit={CrawlOptionEdit}
          create={CrawlOptionCreate}
          show={CrawlOptionShow}
        />
      </Admin>
    </div>
  );
};

export default App;
