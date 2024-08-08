import { css } from 'lit'

export const mainStyles = css`
  .layout {
    display: grid;
    grid-template-columns: 16% 16% 1fr;
    min-height: 100dvh;
  }

  .submenu {
    background-color: var(--dark-violet);
    border-right: 0.063rem solid var(--dark-grey);
  }

  .submenu__title {
    position: relative;
    font-size: 1rem;
    color: var(--white);
    font-weight: 600;
    padding: 1.25rem;
    min-height: 2.625rem;
    display: flex;
    align-items: center;
  }

  .submenu__title::after {
    display: block;
    position: absolute;
    left: 1.25rem;
    bottom: -0.063rem;
    content: '';
    width: 1.25rem;
    height: 0.063rem;
    background-color: var(--dark-grey);
  }

  .main {
    background-color: var(--dark-violet);
  }
`
