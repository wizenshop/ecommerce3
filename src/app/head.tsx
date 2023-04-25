import { getCssText } from "../styles";

export default function Head() {
  return (
    <>
      <meta http-equiv="X-UA-Compatible" content="IE=7" />
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
    </>
  );
}
