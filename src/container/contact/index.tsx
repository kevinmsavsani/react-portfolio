import { useIntl } from "react-intl";

const Contact = () => {
  const intl = useIntl();
  return (
    <div className="border border-neutral-900 pb-4">
      <h1 className="py-10 text-center text-4xl">
        Get in Touch
      </h1>
      <div className="text-center tracking-tighter">
      <p className="py-4">{intl.formatMessage({ id: "contact-address" })}</p>
      <p className="py-4">{intl.formatMessage({ id: "contact-phone-no" })}</p>
      <a href="#" className="border-b">
        {intl.formatMessage({ id: "contact-email" })}
      </a>
      </div>
    </div>
  );
};

export default Contact;
