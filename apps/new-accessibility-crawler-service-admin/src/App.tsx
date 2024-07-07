import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { PageList } from "./page/PageList";
import { PageCreate } from "./page/PageCreate";
import { PageEdit } from "./page/PageEdit";
import { PageShow } from "./page/PageShow";
import { WebsiteList } from "./website/WebsiteList";
import { WebsiteCreate } from "./website/WebsiteCreate";
import { WebsiteEdit } from "./website/WebsiteEdit";
import { WebsiteShow } from "./website/WebsiteShow";
import { AnalysisResultList } from "./analysisResult/AnalysisResultList";
import { AnalysisResultCreate } from "./analysisResult/AnalysisResultCreate";
import { AnalysisResultEdit } from "./analysisResult/AnalysisResultEdit";
import { AnalysisResultShow } from "./analysisResult/AnalysisResultShow";
import { AccessibilityIssueList } from "./accessibilityIssue/AccessibilityIssueList";
import { AccessibilityIssueCreate } from "./accessibilityIssue/AccessibilityIssueCreate";
import { AccessibilityIssueEdit } from "./accessibilityIssue/AccessibilityIssueEdit";
import { AccessibilityIssueShow } from "./accessibilityIssue/AccessibilityIssueShow";
import { AxeResultList } from "./axeResult/AxeResultList";
import { AxeResultCreate } from "./axeResult/AxeResultCreate";
import { AxeResultEdit } from "./axeResult/AxeResultEdit";
import { AxeResultShow } from "./axeResult/AxeResultShow";
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
        title={"NewAccessibilityCrawlerService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Page"
          list={PageList}
          edit={PageEdit}
          create={PageCreate}
          show={PageShow}
        />
        <Resource
          name="Website"
          list={WebsiteList}
          edit={WebsiteEdit}
          create={WebsiteCreate}
          show={WebsiteShow}
        />
        <Resource
          name="AnalysisResult"
          list={AnalysisResultList}
          edit={AnalysisResultEdit}
          create={AnalysisResultCreate}
          show={AnalysisResultShow}
        />
        <Resource
          name="AccessibilityIssue"
          list={AccessibilityIssueList}
          edit={AccessibilityIssueEdit}
          create={AccessibilityIssueCreate}
          show={AccessibilityIssueShow}
        />
        <Resource
          name="AxeResult"
          list={AxeResultList}
          edit={AxeResultEdit}
          create={AxeResultCreate}
          show={AxeResultShow}
        />
      </Admin>
    </div>
  );
};

export default App;
