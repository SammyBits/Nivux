import { Button } from "./Button";

interface props {
  handlePrevClick: () => void;
  handleNextClick: () => void;
}
/**
 * Pagination component with next and prev buttons
 * @param param next and prev button click events 
 * @returns Pagination component
 */
export const Pagination = ({ handleNextClick, handlePrevClick }: props) => {
  return (
    <div className="flex justify-center gap-4 mt-4">
      <Button onClick={handlePrevClick} title="Prev" />
      <Button onClick={handleNextClick} title="Next" />
    </div>
  );
};
