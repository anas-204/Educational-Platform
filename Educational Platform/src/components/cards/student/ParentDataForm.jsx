import styled from "styled-components";
import { useState } from "react";

const StyledWrapper = styled.div`
  /* Overlay styles */
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }

  /* Form container styles */
  .form-container {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
  }

  .form {
    background-color: #15172b;
    border-radius: 20px;
    box-sizing: border-box;
    height: fit-content;
    padding: 20px;
    width: 320px;
  }

  .title {
    color: #eee;
    font-family: Cairo;
    font-size: 36px;
    font-weight: 600;
    margin-top: 30px;
  }

  .input-container {
    height: 50px;
    position: relative;
    width: 100%;
  }

  .ic1 {
    margin-top: 40px;
  }

  .ic2 {
    margin-top: 30px;
  }

  .input {
    background-color: #303245;
    border-radius: 12px;
    border: 0;
    box-sizing: border-box;
    color: #eee;
    font-size: 18px;
    height: 100%;
    outline: 0;
    padding: 4px 20px 0;
    width: 100%;
  }

  .cut {
    background-color: #15172b;
    border-radius: 10px;
    height: 20px;
    right: 20px;
    position: absolute;
    top: -20px;
    transform: translateY(0);
    transition: transform 200ms;
    width: 76px;
  }

  .iLabel {
    color: #65657b;
    font-family: Cairo;
    right: 20px;
    line-height: 14px;
    pointer-events: none;
    position: absolute;
    transform-origin: 0 20%;
    transition:
      transform 200ms,
      color 200ms;
    top: 20px;
  }

  .input:focus ~ .cut {
    transform: translateY(8px);
  }

  .input:focus ~ .iLabel {
    transform: translateY(-30px) translateX(10px) scale(0.75);
  }

  .input:not(:focus) ~ .iLabel {
    color: #808097;
  }

  .input:focus ~ .iLabel {
    color: #dc2f55;
  }

  /* Relationship Radio Buttons Styles */
  .relationship-container {
    margin-top: 30px;
    color: #eee;
    font-family: Cairo;
  }

  .relationship-label {
    display: block;
    margin-bottom: 15px;
    font-size: 16px;
    color: #65657b;
  }

  .radio-group {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .radio-label {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    padding: 8px 12px;
    border-radius: 8px;
    background-color: #303245;
    transition: background-color 0.2s;

    &:hover {
      background-color: #3a3c52;
    }

    input[type="radio"] {
      margin-left: 10px;
      transform: scale(1.2);
    }
  }

  /* Submit Button Styles */
  .submit {
    background-color: #08d;
    border-radius: 12px;
    border: 0;
    box-sizing: border-box;
    color: #eee;
    cursor: pointer;
    font-size: 15px;
    height: 40px;
    margin-top: 20px;
    text-align: center;
    width: 100%;
    transition: background-color 0.2s;

    &:hover {
      background-color: #06b;
    }

    &:active {
      background-color: #059;
    }
  }

  .close-btn {
    background-color: #dc2f55;

    &:hover {
      background-color: #c02a4a;
    }

    &:active {
      background-color: #a82540;
    }
  }
`;

// In your ParentDataForm component, fix the relationship field name:
const ParentDataForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    relationship: "", // Changed from 'relation' to 'relationship'
    phone: "",
  });
  const userToken = localStorage.getItem("authToken");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/student/parents", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Data saved successfully:", result);
        onClose(); // This will trigger the parent data refresh
      } else {
        console.error("Failed to save data:", response.status);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  // ... rest of your form JSX remains the same, but update the radio button names:
  return (
    <StyledWrapper>
      {/* Overlay background */}
      <div className="overlay" onClick={onClose}></div>

      {/* Form container */}
      <div className="form-container">
        <form className="form mt-4 mx-auto" onSubmit={handleSubmit}>
          <div className="title text-center">بيانات ولي الأمر</div>

          <div className="input-container ic1">
            <input
              type="text"
              className="input"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <div className="cut" />
            <label className="iLabel" htmlFor="name">
              {formData.name ? "" : "الإسم "}
            </label>
          </div>

          <div className="input-container ic2">
            <input
              type={"tel"}
              className="input"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <div className="cut" />
            <label className="iLabel" htmlFor="lastname">
              {formData.phone ? "" : " رقم الهاتف"}
            </label>
          </div>

          <div className="relationship-container">
            <label className="relationship-label">صلة القرابة</label>
            <div className="radio-group d-flex flex-row gap-2 flex-wrap">
              <label className="radio-label col-5">
                <input
                  type="radio"
                  name="relationship" // Changed from 'relation' to 'relationship'
                  value="father"
                  checked={formData.relationship === "father"}
                  onChange={handleChange}
                />
                أب
              </label>
              <label className="radio-label col-5">
                <input
                  type="radio"
                  name="relationship" // Changed from 'relation' to 'relationship'
                  value="mother"
                  checked={formData.relationship === "mother"}
                  onChange={handleChange}
                />
                أم
              </label>

              <label className="radio-label col-5">
                <input
                  type="radio"
                  name="relationship" // Changed from 'relation' to 'relationship'
                  value="others"
                  checked={formData.relationship === "others"}
                  onChange={handleChange}
                />
                شخص اّخر
              </label>
            </div>
          </div>

          <button className="submit mx-auto d-block" type="submit">
            إنهاء
          </button>
          <button
            className="submit mx-auto d-block close-btn"
            type="button"
            onClick={onClose}
          >
            غلق
          </button>
        </form>
      </div>
    </StyledWrapper>
  );
};

export default ParentDataForm;
