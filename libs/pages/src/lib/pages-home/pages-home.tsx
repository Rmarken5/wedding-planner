/* eslint-disable-next-line */

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PagesHomeProps {}

export function PagesHome(props: PagesHomeProps) {
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
        <input className={'txt-primary'} type="text" />
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
        <a href="#">link</a>
      </div>
    </div>
  );
}

export default PagesHome;
