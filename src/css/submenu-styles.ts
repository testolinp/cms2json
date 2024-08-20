import { css } from 'lit'

export const submenuStyles = css`
  .submenu {
    background-color: var(--dark-violet);
    border-right: 0.063rem solid var(--dark-grey);
  }

  .submenu__title {
    position: relative;
    font-size: 1rem;
    color: var(--white);
    font-weight: 600;
    padding: .938rem;
    min-height: 2.625rem;
    display: flex;
    align-items: center;
  }

  .submenu__title::after {
    display: block;
    position: absolute;
    left: 1.25rem;
    bottom: -.063rem;
    content: '';
    width: 1.25rem;
    height: .063rem;
    background-color: var(--dark-grey);
  }

  .submenu__wrapper {
    display: flex;
    gap: .5rem;
    flex-direction: column;
    list-style: none;
    padding: .938rem;
  }

  .submenu__wrapper__title {
    font-size: .875rem;
    color: var(--grey);
    font-weight: 600;
  }

  .submenu__wrapper__item {
    display: flex;
    font-size: .875rem;
    color: var(--white);
    gap: 1rem;
    margin-left: 1rem;
    align-items: center;
  }

  .submenu__wrapper__item::before {
    display: block;
    content: '';
    width: .313rem;
    height: .313rem;
    border-radius: 100%;
    background-color: var(--white);
  }

  .submenu__wrapper__item button {
    color: var(--white);
    text-decoration: none;
    border: 0 none;
    background: transparent;
    cursor: pointer;
  }

  .submenu__wrapper__item--active button {
    color: var(--main-btns);
  }

  .submenu__wrapper__item--active::before {
    background-color: var(--main-btns);
  }
`
