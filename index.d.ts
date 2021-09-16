declare module "*.jpg";
declare module "*.module.scss";
declare module "*.png" {
  const value: any;
  export = value;
}
