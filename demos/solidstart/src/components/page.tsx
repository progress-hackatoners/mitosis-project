import { Grid } from './Grid';

export const Page = (props: any) => {
  const toolbar = <Toolbar></Toolbar>;

  return <Grid toolbar={toolbar}></Grid>;
};
