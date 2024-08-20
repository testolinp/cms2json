import { css } from 'lit'

export const mainStyles = css`
  .layout {
    display: grid;
    grid-template-columns: 16% 1fr;
    min-height: 100dvh;
  }

  .main {
    background-color: var(--dark-violet);
  }

  .wrapper {
    display: grid;
    grid-template-columns: 16% 1fr;
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
    padding: 0.938rem;
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

  .submenu__wrapper {
    display: flex;
    gap: .5rem;
    flex-direction: column;
    list-style: none;
    padding: 0.938rem;
  }

  .submenu__wrapper__title {
    font-size: 0.875rem;
    color: var(--grey);
    font-weight: 600;
  }

  .submenu__wrapper__item {
    display: flex;
    font-size: 0.875rem;
    color: var(--white);
    gap: 1rem;
    margin-left: 1rem;
    align-items: center;
  }

  .submenu__wrapper__item a {
    color: var(--white);
    text-decoration: none;
  }

  .submenu__wrapper__item::before {
    display: block;
    content: '';
    width: 5px;
    height: 5px;
    border-radius: 100%;
    background-color: var(--white);
  }
`
