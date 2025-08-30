import { useState, useEffect } from "react";

export default function Main() {
  const [workoutRecords, setWorkoutRecords] = useState([]); //empty array

  const handleCreateRecord = (event) => {
    event.preventDefault(); // event handler for submit button

    console.log(event.target.equip.value);
    console.log(event.target.sets.value);
    console.log(event.target.reps.value);
    console.log(event.target.weight.value);
  }

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
      </section>
    </main>
  );
}
