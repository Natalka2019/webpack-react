import React, { useRef } from "react";
import { InputField, Button } from "components";
import { IMovie } from "models";

interface Props {
  movie: IMovie;
  onSubmit: (titleRef: string) => void;
}

const MovieModal: React.FC<Props> = ({ movie, onSubmit }) => {
  const titleRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      <InputField ref={titleRef} placeholder="Title" />
      <Button
        name="Save"
        onClick={() => onSubmit(titleRef?.current?.value || "")}
      />
    </div>
  );
};

export default MovieModal;
