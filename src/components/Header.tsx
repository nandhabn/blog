import React from "react"
import GithubIcon from "simple-icons/icons/github.svg"
import MailIcon from "simple-icons/icons/minutemailer.svg"
import TwitterIcon from "simple-icons/icons/twitter.svg"
import styled, { css } from "styled-components"
import A from "./A"

const App: React.FC = () => {
  return (
    <header
      css={css`
        margin-bottom: 15px;
      `}
    >
      <nav
        css={css`
          ul {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0;
            margin: 0;
          }

          ul li {
            list-style: none;
          }

          ul li h1 {
            font-weight: normal;
            margin: 0;
          }

          ul li img {
            width: 24px;
          }
          
          ul li + li {
            margin-left: 20px;
          }

          ul li:nth-child(2) {
            margin-left: auto;
          }
        `}
      >
        <ul>
          <li>
            <h1>
              <A href="/" visitable={false}>
                nhooyr
              </A>
            </h1>
          </li>
          <li>
            <Icon href="https://github.com/nhooyr">
              <GithubIcon/>
            </Icon>
          </li>
          <li>
            <Icon href="https://twitter.com/nhooyr">
              <TwitterIcon/>
            </Icon>
          </li>
          <li>
            <Icon href="mailto:hi@nhooyr.io">
              <MailIcon/>
            </Icon>
          </li>
        </ul>
      </nav>
    </header>
  )
}

const Icon: React.FC<{ href: string }> = (props): JSX.Element => {
  return (
    <StyledIcon href={props.href} visitable={false}>
      {props.children}
    </StyledIcon>
  )
}

const StyledIcon = styled(A)`
  svg {
    width: 24px;
    height: 100%;
  }
`

export default App
