import classes from './home-ui-login-form.module.scss';

/* eslint-disable-next-line */
export interface HomeUiLoginFormProps {}

export function HomeUiLoginForm(props: HomeUiLoginFormProps) {
  return (
    <div className="inline-flex flex-col">
      <section className="mb-4">
      <section className={classes['margin-bottom']}>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
      </section>
      </section>
      <section className="block mb-2">
        <label>
          Password:
          <input type="password" name="username" />
        </label>
      </section>
    </div>
  );
}

export default HomeUiLoginForm;
