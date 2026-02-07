import { useState, useEffect } from "react";
import axios from "axios";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import apiRequest from "../../utils/apiRequest";
import { toast } from "sonner";

export default function SessionsForm({ onClose, onSubmitSuccess }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    center_id: "",
    section: "",
    session_date: "",
    session_time: "",
  });
  const [centersData, setCenters] = useState([]);

  useEffect(() => {
    getCenters();
  }, []);

  const combineDateTime = (dateStr, timeStr) => {
    if (!dateStr || !timeStr) return "";

    // Create a Date object from the combined date and time
    const combinedDateTime = new Date(`${dateStr}T${timeStr}`);
    console.log(combinedDateTime);
    // Convert to ISO string (e.g., "2028-01-10T00:00:00.000Z")
    return combinedDateTime.toISOString();
  };

  combineDateTime("2025-10-20", "14:30");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSection = (event) => {
    setFormData({
      ...formData,
      section: event.target.value,
    });
  };

  const handleCenterChange = (event) => {
    setFormData({
      ...formData,
      center_id: event.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validation()) {
      return;
    }

    try {
      const sessionDatetime = combineDateTime(
        formData.session_date,
        formData.session_time,
      );
      await apiRequest({
        service: "TEACHER_SESSIONS_CREATE",
        payload: { ...formData, session_datetime: sessionDatetime },
      }).then((res) => {
        console.log(res);
      });
    } catch (err) {
      console.error(err);
      // setErrorMessage(err.message);
    } finally {
      // setIsLoading(false);
    }
  };

  const getCenters = async () => {
    try {
      await apiRequest({
        service: "TEACHER_CENTERS",
      }).then((res) => {
        setCenters(res);
      });
    } catch (err) {
      console.error(err);
    }
  };
  const validation = () => {
    if (
      !formData.title ||
      !formData.description ||
      !formData.center_id ||
      !formData.section ||
      !formData.session_date ||
      !formData.session_time
    ) {
      toast.error("يرجى ملء جميع الحقول");
      return false;
    }
    return true;
  };

  return (
    <div className="d-flex justify-content-center align-items-center p-4">
      <form
        className="form-section d-flex flex-column my-auto w-100"
        onSubmit={handleSubmit}
        style={{ maxWidth: "500px" }}
      >
        <h2 className="mx-auto mb-4">إنشاء جلسة جديدة</h2>

        {/* title Field */}
        <div className="title mx-auto my-1">
          <label htmlFor="title" className="titleLabel text-end w-100 mb-1">
            عنوان الجلسة
          </label>
          <div className="relative">
            <button
              type="button"
              className="text-gray-400 absolute left-3 inset-y-0 active:text-gray-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-clipboard-pen-line-icon lucide-clipboard-pen-line"
              >
                <rect width="8" height="4" x="8" y="2" rx="1" />
                <path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5" />
                <path d="M16 4h2a2 2 0 0 1 1.73 1" />
                <path d="M8 18h1" />
                <path d="M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
              </svg>
            </button>
            <input
              type={"text"}
              placeholder="أدخل عنوان الجلسة "
              className="col-12 form-control text-end w-full pr-12 pl-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 rounded-lg"
              id="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <InputLabel
          id="demo-simple-select-filled-label"
          sx={{
            width: "80%",
            margin: "3px auto",
            textAlign: "right",
            paddingRight: "0px",
            fontFamily: "Cairo",
          }}
        >
          المقر
        </InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="center_id"
          value={formData.center_id}
          onChange={handleCenterChange}
          sx={{
            width: "80%",
            margin: "0 auto",
            border: "1px solid #e5e3e3ff",
            borderRadius: "10px !important",
            fontFamily: "Cairo",
            height: "42px",
            "& .MuiSelect-select": {
              paddingRight: "35px",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "&:focus": {
              outline: "2px solid hsl(270, 100%, 50%)",
              boxShadow: "0 0 0 2px hsl(270, 100%, 50%)",
            },
          }}
          MenuProps={{
            sx: {
              borderRadius: "25px",
              fontFamily: "Cairo",
            },
          }}
          required
        >
          {centersData.length > 0 ? (
            centersData.map((center) => (
              <MenuItem
                key={center.id}
                value={center.id}
                className="menuItem"
                sx={{
                  borderRadius: "5px",
                  fontFamily: "Cairo",
                  borderBottom: "1px solid #eeeeee8f",
                  direction: "rtl",
                }}
              >
                {center.name == "Zayed Center"
                  ? "مقر الشيخ زايد"
                  : center.name == "Giza Center"
                    ? "مقر الجيزة"
                    : center.name == "Doki Center"
                      ? "مقر الدقي"
                      : center.name == "Elmohndseen Center"
                        ? "مقر المهندسين"
                        : "مقر عين شمس"}
              </MenuItem>
            ))
          ) : (
            <MenuItem disabled>جاري تحميل المراكز...</MenuItem>
          )}
        </Select>

        {/* Description Field */}
        <div className="description mx-auto my-1">
          <label
            htmlFor="description"
            className="descriptionLabel text-end w-100 mb-1"
          >
            وصف الجلسة
          </label>
          <div className="relative">
            <svg
              className="w-5 h-5 text-gray-400 absolute left-3 inset-y-0 my-auto"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            <input
              type="text"
              placeholder="أدخل وصف الجلسة "
              className="col-12 form-control text-end w-full pr-12 pl-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 rounded-lg"
              id="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Date Field */}
        <div className="date mx-auto my-2">
          <label htmlFor="date" className="dateLabel text-end w-100 mb-1">
            تاريخ الجلسة
          </label>
          <div className="relative">
            <button
              type="button"
              className="text-gray-400 absolute left-3 inset-y-0 active:text-gray-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-calendar-icon lucide-calendar"
              >
                <path d="M8 2v4" />
                <path d="M16 2v4" />
                <rect width="18" height="18" x="3" y="4" rx="2" />
                <path d="M3 10h18" />
              </svg>
            </button>
            <input
              type="date"
              className="col-12 form-control text-end w-full pr-12 pl-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 rounded-lg"
              id="session_date"
              value={formData.session_date}
              onChange={handleChange}
              required
              style={{
                color: formData.session_date ? "inherit" : "#9ca3af", // Gray when empty
              }}
            />
          </div>
        </div>

        {/* Student Year Selection */}
        <InputLabel
          id="demo-simple-select-filled-label"
          sx={{
            width: "80%",
            margin: "3px auto",
            textAlign: "right",
            paddingRight: "0px",
            fontFamily: "Cairo",
          }}
        >
          الصف الدراسي
        </InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="section"
          value={formData.section}
          onChange={handleSection}
          sx={{
            width: "80%",
            margin: "0 auto",
            border: "1px solid #e5e3e3ff",
            borderRadius: "10px !important",
            fontFamily: "Cairo",
            height: "42px",
            "& .MuiSelect-select": {
              paddingRight: "35px",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "&:focus": {
              outline: "2px solid hsl(270, 100%, 50%)",
              boxShadow: "0 0 0 2px hsl(270, 100%, 50%)",
            },
          }}
          MenuProps={{
            sx: {
              borderRadius: "25px",
              fontFamily: "Cairo",
            },
          }}
          required
        >
          <MenuItem
            value={"first_sec"}
            className="menuItem"
            sx={{
              borderRadius: "5px",
              fontFamily: "Cairo",
              borderBottom: "1px solid #eeeeee8f",
              direction: "rtl",
            }}
          >
            الأول الثانوي
          </MenuItem>
          <MenuItem
            value={"second_sec_scientific"}
            className="menuItem"
            sx={{
              borderRadius: "5px",
              fontFamily: "Cairo",
              borderBottom: "1px solid #eeeeee8f",
              direction: "rtl",
            }}
          >
            علمي - الثاني الثانوي
          </MenuItem>
          <MenuItem
            value={"second_sec_literary"}
            className="menuItem"
            sx={{
              borderRadius: "5px",
              fontFamily: "Cairo",
              borderBottom: "1px solid #eeeeee8f",
              direction: "rtl",
            }}
          >
            أدبي - الثاني الثانوي
          </MenuItem>
          <MenuItem
            value={"third_sec"}
            className="menuItem"
            sx={{
              borderRadius: "5px",
              fontFamily: "Cairo",
              direction: "rtl",
            }}
          >
            الثالث الثانوي
          </MenuItem>
        </Select>

        {/* time Field */}
        <div className="time mx-auto my-2">
          <label
            htmlFor="session_time"
            className="timeLabel text-end w-100 mb-1"
          >
            وقت الجلسة
          </label>
          <div className="relative">
            <button
              type="button"
              className="text-gray-400 absolute left-3 inset-y-0 active:text-gray-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-timer-icon lucide-timer"
              >
                <line x1="10" x2="14" y1="2" y2="2" />
                <line x1="12" x2="15" y1="14" y2="11" />
                <circle cx="12" cy="14" r="8" />
              </svg>
            </button>
            <input
              type={"time"}
              placeholder=" أدخل وقت الجلسة "
              className="col-12 form-control text-end w-full pr-12 pl-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 rounded-lg"
              id="session_time"
              value={formData.session_time}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="d-flex gap-2 mt-3 flex-wrap">
          <button
            className="submit mx-auto border-0 p-2"
            type="submit"
            onClick={handleSubmit}
            style={{ minWidth: "100px" }}
          >
            إنشاء الجلسة
          </button>
          <button
            className="btn btn-outline-primary p-2 mx-auto border-1 cancel"
            type="button"
            onClick={onClose}
            style={{ minWidth: "100px" }}
          >
            إلغاء
          </button>
        </div>
      </form>
    </div>
  );
}
