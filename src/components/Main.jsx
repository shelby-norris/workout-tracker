import { useState, useEffect } from "react";

export default function Main() {
  const [workoutRecords, setWorkoutRecords] = useState([]); //empty array

  const handleCreateRecord = (event) => {
    event.preventDefault(); // event handler for submit button

    const newWorkoutLog = {
      equip: event.target.equip.value,
      sets: event.target.sets.value,
      reps: event.target.reps.value,
      weight: event.target.weight.value,
    };

    setWorkoutRecords((pastWorkoutLogs) => [...pastWorkoutLogs, newWorkoutLog]);
  };

  return (
    <main>
      <section>
        {/* form layout for workout input; onSubmit is callback for event handler */}
        <form onSubmit={(event) => handleCreateRecord(event)}>
          <label htmlFor="equip">Equipment</label>
          <input type="text" name="equip" id="equipInput" />
          <br />
          <label htmlFor="sets">Sets</label>
          <input type="number" name="sets" id="setsInput" />
          <br />
          <label htmlFor="reps">Reps</label>
          <input type="number" name="reps" id="repsInput" />
          <br />
          <label htmlFor="weight">Weight</label>
          <input type="number" name="weight" id="weightInput" />
          <br />
          <button>Submit</button>
        </form>
      </section>

      <section>
        <h2>Previous Workouts</h2>

        {workoutRecords.map((record, index) => {
          return (
            <div className="workout-logs" key={index}>
              <div>
                <h3>Equipment</h3>
                <p>{record.equip}</p>
              </div>
              <div>
                <h3>Sets</h3>
                <p>{record.sets}</p>
              </div>
              <div>
                <h3>Reps</h3>
                <p>{record.reps}</p>
              </div>
              <div>
                <h3>Weight</h3>
                <p>{record.weight}</p>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}
