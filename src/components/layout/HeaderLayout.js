import MainNavigation from "./MainNavigation";
import classes from './HeaderLayout.module.css'

function HeaderLayout(props) {
  return (
    <div className={classes.mainBody}>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default HeaderLayout;
