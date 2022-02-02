import AOS from "aos";
import { useEffect } from "react";

const Error = ({ msg }) => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <p className="neu-border error-msg" data-aos="fade-up">
      {msg}
    </p>
  );
};

export default Error;
