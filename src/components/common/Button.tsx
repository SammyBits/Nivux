interface Props {
    onClick: () => void;
    title: string;
  }
  /**
   * Button component with onClick event and title
   * @param param onClick event and title
   * @returns Button component
   */
  export const Button = ({ onClick, title }: Props) => {
    return (
      <button
        onClick={onClick}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        {title}
      </button>
    );
  };