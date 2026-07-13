import { Oval } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.backdrop}>
      <div className={css.modal}>
        <div className={css.spinnerWrapper}>
          <Oval
            height={60}
            width={60}
            color="var(--primary)"
            secondaryColor="rgba(130, 155, 145, 0.2)"
            strokeWidth={3}
            strokeWidthSecondary={3}
            visible={true}
            ariaLabel="oval-loading"
          />
        </div>
        <h3 className={css.title}>Loading tracks...</h3>
        <p className={css.text}>
          Please wait while we fetch the best
          <br />
          travel trucks for you
        </p>
      </div>
    </div>
  );
};

export default Loader;
