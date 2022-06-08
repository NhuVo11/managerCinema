import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./editSchedule.css";
import { LocalizationProvider, DateTimePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { TextField } from "@mui/material";
import ScheduleService from "../../../service/ScheduleService";

function EditSchedule() {
  let { id } = useParams();
  const [date, setDate] = useState(new Date());

  const [schedule, setShedule] = useState(null);

  useEffect(() => {
    console.log(id);
    if (id) {
      getSchedule(id);
    }
  }, [id]);

  const getSchedule = (id) => {
    ScheduleService.get(id)
      .then((res) => {
        setShedule(res.data);
        console.log(res.data);
      })
      .catch((e) => console.log(e));
  };
  return (
    <>
      {schedule ? (
        <div className="editSchedule">
          <h2>Update Schedule</h2>
          <form>
            <div className="newItem dateTimePicker">
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                  label="Date time"
                  value={schedule.datetime}
                  onChange={(newValue) => {
                    setDate(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </div>
            <div className="newItem"></div>
            <span className="newForm">
              <button className="newButton">Create</button>
              <Link to={"/moviesList"} className="newButton cancel">
                Cancel
              </Link>
            </span>
          </form>
        </div>
      ) : (
        <div>empty room</div>
      )}
    </>
  );
}

export default EditSchedule;
