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

  .content {
    padding: .938rem 4rem;
  }

  .content__header {
    display: flex;
    padding-bottom: 2.625rem;
    align-items: center;
  }

  .content__header h1 {
    font-size: 2rem;
  }

  .content__header p {
    color: var(--grey);
  }

  .content__header button {
    margin-left: auto;
    background-color: var(--main-btns);
    color: var(--white);
    border: 0 none;
    display: flex;
    gap: .5rem;
    height: 2.5rem;
    padding: 0 1rem;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    border-radius: .188rem;
    cursor: pointer;
  }

  .content__wrapper {
    background-color: var(--light-violet);
    border: .063rem solid var(--dark-grey);
    border-radius: .188rem;
    padding: 0 1rem;
  }

  .content__row {
    display: flex;
    padding: 1rem;
    color: white;
    border-bottom: 0.063rem solid var(--dark-grey);
    text-decoration: none;
  }

  .content__row--title {
    font-weight: 600;
    font-size: 11px;
    color: var(--grey);
  }

  .content__row:last-child {
    border: 0 none;
  }

  .content__row__id {
    width: 10%;
  }

  .content__row__title,
  .content__row__slug {
    width: 45%;
  }
`
