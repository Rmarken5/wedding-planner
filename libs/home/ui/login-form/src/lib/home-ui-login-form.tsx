/* eslint-disable-next-line */
export interface HomeUiLoginFormProps {}

export function HomeUiLoginForm(props: HomeUiLoginFormProps) {
  return (
    <div className="flex flex-col items-center">
      <section className="block mb-4">
        <label>
          <input
            placeholder={'Username'}
            type="text"
            name="username"
            className="w-60"
          />
        </label>
      </section>
      <section className="block mb-4 ">
        <label>
          <input
            placeholder={'Password'}
            type="password"
            name="password"
            className="w-60"
          />
        </label>
      </section>
    </div>
  );
}

export default HomeUiLoginForm;
