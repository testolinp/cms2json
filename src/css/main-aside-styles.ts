import { css } from 'lit'

export const mainAsideStyles = css`
  .menu {
    background-color: var(--light-violet);
    border-right: 0.063rem solid var(--dark-grey);
    height: 100dvh;
  }

  .lg {
    padding: 0.938rem;
    display: grid;
    grid-template-columns: 1.875rem 1fr;
    gap: 1rem;
    border-bottom: 0.063rem solid var(--dark-grey);
  }

  .lg__image {
    width: 1.875rem;
    height: 1.875rem;
    border-radius: 0.188rem;
    background-color: var(--dark-violet);
  }

  .lg__data h1 {
    font-size: 0.875rem;
    color: var(--white);
    font-weight: 600;
  }

  .lg__data p {
    font-size: 0.875rem;
    color: var(--grey);
  }

  .menu__nav {
    padding: 0.938rem;
  }

  .menu__nav__btn {
    color: var(--main-btns);
    padding: 0.625rem;
    display: flex;
    background-color: var(--dark-violet);
    gap: 0.625rem;
    font-weight: 600;
    text-decoration: none;
    align-items: center;
    font-size: 0.875rem;
    border-radius: 0.188rem;
  }

  .menu__nav__gral {
    display: flex;
    flex-direction: column;
    padding-top: 25px;
    gap: 15px;
  }

  .menu__nav__gral h2 {
    font-size: 1rem;
    color: var(--grey);
    font-weight: 600;
  }

  .menu__nav__gral a {
    display: flex;
    gap: 10px;
    align-items: center;
    font-size: 0.875rem;
    color: var(--grey);
    text-decoration: none;
  }
`
