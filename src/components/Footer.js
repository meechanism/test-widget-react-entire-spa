import React from "react";
import styled from "styled-components";

const Bg = styled.div`
  background: #eee;
  padding: 1rem;
  display: flex;
  margin-top: 2rem;
`;

const Brand = styled.span`
  display: inline-block;
  background: #fff;
  color: #ddd;
  padding: 0.5rem;
  font-weight: bold;
`;

const FooterItem = styled.span`
  margin: 0.25rem 1rem 0;
  font-size: 0.8rem;
  color: #aaa;
`;

const Footer = ({ children }) => {
  return (
    <Bg>
      <Brand>SPA</Brand>
      <FooterItem>{children}</FooterItem>
    </Bg>
  );
};

export default Footer;
