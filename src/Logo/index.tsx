import { useState } from "react";
import { Image } from "./Logo.styles";
import classNames from "classnames";

type Props = {
  logo?: boolean;
};

export const Logo = ({ logo }: Props) => {
  const [isErrored, setIsErrored] = useState(false);
  if (isErrored) return null;

  const src = logo ? "/logo.png" : "/ortex-logo.webp";

  return (
    <Image>
      <img
        src={src}
        alt="logo"
        onError={() => setIsErrored(true)}
        className={classNames({ ["logo"]: logo })}
      />
    </Image>
  );
};
