import { React, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Layout } from "antd";
import "antd/dist/antd.css";
import MenuItems from "./components/MenuItems";
import Home from "./components/Home";
const { Header } = Layout;
// import { 
//   Home, 
//   About, 
//   Contact, 
//   Careers, 
//   Features, 
//   FAQs, 
//   Team, 
//   Roadmap, 
//   Whitepaper, 
//   Login, 
//   ResetPassword, 
//   Signup,
//   HomeNFT,
//   FAQsNFT,
//   CreatorsNFT,
//   CreatorsSettingsNFT,
//   ExploreNFT,
//   CollectionsNFT,
//   UploadWorkNFT,
//   CreatorsProfileNFT,
//   ItemDetailNFT,
//   Error
// } from "./components";

const styles = {
  content: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Roboto, sans-serif",
    color: "#041836",
    marginTop: "0px",
    padding: "0px",
  },
  header: {
    position: "fixed",
    zIndex: 1,
    width: "100%",
    background: "#000000",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "Roboto, sans-serif",
    borderBottom: "0px",
    padding: "0px",
    boxShadow: "0 1px 10px rgb(151 164 175 / 10%)",
  },
  headerRight: {
    display: "flex",
    background: "#000000",
    gap: "20px",
    alignItems: "center",
    fontSize: "15px",
    fontWeight: "600",
  },
};

const App = () => {
  return (
    <Layout style={{height: "100vh", overflow: "auto" }}>
      <Router>
        <Header style={styles.header}>
          {/* <Logo /> */}
          <MenuItems />
        </Header>
        <div style={styles.content}>
          <Switch>
            <Route path="/home">
              <Home/>
            </Route>
            {/* <Route path="/faqsnft">
              <FAQsNFT isServerInfo={isServerInfo} />
            </Route>
            <Route path="/creatorsnft">
              <CreatorsNFT isServerInfo={isServerInfo} />
            </Route>
            <Route path="/creatorsprofilenft">
              <CreatorsProfileNFT isServerInfo={isServerInfo} />
            </Route>
            <Route path="/creatorssettingsnft">
              <CreatorsSettingsNFT isServerInfo={isServerInfo} />
            </Route>
            <Route path="/explorenft">
              <ExploreNFT isServerInfo={isServerInfo} />
            </Route>
            <Route path="/collectionsnft">
              <CollectionsNFT isServerInfo={isServerInfo} />
            </Route>
            <Route path="/itemdetailnft">
              <ItemDetailNFT isServerInfo={isServerInfo} />
            </Route>
            <Route path="/uploadworknft">
              <UploadWorkNFT isServerInfo={isServerInfo} />
            </Route>
            <Route path="/uploaddetailnft">
              <UploadDetailNFT isServerInfo={isServerInfo} />
            </Route>
            <Route path="/error">
              <Error isServerInfo={isServerInfo} />
            </Route> */}
          </Switch>
        </div>
      </Router>
    </Layout>
  );
};

export default App;
