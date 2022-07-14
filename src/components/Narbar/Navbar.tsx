import React, { useEffect, useState } from "react";
import sections from "../../consts/sections";

import { Container, Content, Logo, LinksContent, Link } from "./Navbar.styles";

const Narbar: React.FC = () => {
  const [navLiActive, setnavLiActive] = useState(sections.header.key);
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const navbar = document.getElementById('navbar');
    const navBarHeight = navbar ? navbar.clientHeight : 0;

    sections.forEach(section => {
      section.style.scrollMargin = `${navBarHeight}px`;
    });

    window.addEventListener('scroll', () => {
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= (sectionTop - navBarHeight) - sectionHeight / 3) {
          setnavLiActive(section.getAttribute('id') || '');
        }
      })
    });
  }, []);

  return (
    <Container id="navbar">
      <Content>
        <Logo href="/">CheckSpeech AI</Logo>
        <LinksContent>
          <ul className="navbar">
            <li>
              <Link href={`#${sections.header.key}`} active={navLiActive === sections.header.key}>{sections.header.name}</Link>
            </li>
            <li>
              <Link href={`#${sections.solutions.key}`} active={navLiActive === sections.solutions.key}>{sections.solutions.name}</Link>
            </li>
            <li>
              <Link href={`#${sections.customers.key}`} active={navLiActive === sections.customers.key}>{sections.customers.name}</Link>
            </li>
            <li>
              <Link href={`#${sections.prices.key}`} active={navLiActive === sections.prices.key}>{sections.prices.name}</Link>
            </li>
            <li>
              <Link href={`#${sections.contact.key}`} active={navLiActive === sections.contact.key}>{sections.contact.name}</Link>
            </li>
          </ul>
        </LinksContent>
      </Content>
    </Container>
  );
};

export default Narbar;
