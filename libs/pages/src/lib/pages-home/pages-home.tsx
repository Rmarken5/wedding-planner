/* eslint-disable-next-line */

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PagesHomeProps {}

export function PagesHome(props: PagesHomeProps) {
  return (
    <div className="h-screen bg-cyan-50">
      <h1>Welcome to The Wedding Planner!</h1>
      <p className="text-lg font-light">
        The quick red fox jumped over the lazy dog.
      </p>
    </div>
  );
}

export default PagesHome;
