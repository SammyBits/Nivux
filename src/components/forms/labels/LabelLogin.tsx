
interface props
{
    title: string;
    htmlFor: string;
    className: string;
}

export const LabelLogin = ({title, htmlFor, className}: props) => {
  return (
    <label
      htmlFor={htmlFor}
      className={className}
    >
      {title}
    </label>
  );
};
