type ButonProps = {
  label: string;
  onClick?: () => void;
};

export const Button = (props: ButonProps) => {
  const { label, onClick } = props;
  return (
    <button
      type="button"
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      onClick={onClick}
    >
      {label}
    </button>
  );
};
