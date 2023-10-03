import { useForm } from "react-hook-form";

import './styles.css';

export default function Player(props) {
    const { handleGame } = props;
  const { register, handleSubmit, formState } = useForm();
  const onSubmit = (d) => {
    handleGame({...d, isGameStarted: true});
  }
  const { errors } = formState;
 
  return (
    <div className="play">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h2> PlayerForm</h2>
        </div>
        <div className="form">
          <label>
            Player 1 Name:
            <br />
            <input
              {...register("playerOne", {
                required: "Player One Name is required",
              })}
            />
            {errors && errors.playerOne && (
              <div className="error">{errors.playerOne.message}</div>
            )}
          </label>
        </div>
        <div className="form">
          <label>
            Player 2 Name:
            <br />
            <input
              {...register("playerTwo", {
                required: "Player Two Name is required",
              })}
            />
            {errors && errors.playerTwo && (
              <div className="error">{errors.playerTwo.message}</div>
            )}
          </label>
        </div>

        <input type="submit" value="Start Game" className="submit" />
      </form>
    </div>
  );
}
