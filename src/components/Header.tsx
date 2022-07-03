import * as React from "react";
import { Appbar } from "react-native-paper";

const Header = () => (
  <Appbar.Header style={{ backgroundColor: "#484848" }}>
    <Appbar.Content title="Know Your Stuff Wiki" />
  </Appbar.Header>
);

export default Header;
