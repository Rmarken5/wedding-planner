import styles from './theme-page-theme.module.scss';

/* eslint-disable-next-line */
export interface ThemePageThemeProps {}

export function ThemePageTheme(props: ThemePageThemeProps) {
  return (
    <div className="h-screen bg-cyan-50">
      <h1 className="h1">Welcome to The Wedding Planner!</h1>
      <h2 className="h2">Welcome to The Wedding Planner!</h2>
      <h3 className="h3">Welcome to The Wedding Planner!</h3>
      <h4 className="h4">Welcome to The Wedding Planner!</h4>
      <p className="text-lg font-light">
        The quick red fox jumped over the lazy dog.
      </p>
      <div className="block">
        <label htmlFor="text">Input field: </label>
        <input className={'txt-primary'} name="text" type="text" />
      </div>
      <div className="block">
        <label htmlFor="check">Option 1: </label>
        <input id="check" name="check" type="checkbox" />
      </div>
      <div className="block">
        <label htmlFor="radio">Radio 1: </label>
        <input id="radio" name="radio" type="radio" />
      </div>
      <div className="block">
        <button className="btn-primary">click me</button>
      </div>
      <div className="block">
        <a className={"a-primary"} href="/#">Link</a>
      </div>
    </div>
  );
}

export default ThemePageTheme;
