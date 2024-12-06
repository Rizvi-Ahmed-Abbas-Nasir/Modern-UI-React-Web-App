import React, { useState } from "react";
import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";
import RouteTransition from "../components/RouteTransition"


const FormContainer = styled.div`
  padding: 7rem 3rem;
  background-color: white;
  border-radius: 15px;
  max-width: 1200px;
  margin: auto;
  font-family: 'Mona Sans', sans-serif;

  @media (max-width: 768px) {
    padding: 5rem 2rem;
  }

  @media (max-width: 568px) {
    padding: 5rem 1rem;
  }
`;

const FormTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #333;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const FormGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  width: 100%;

  .input {
    flex: 1;
    min-width: 200px;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  .input span {
    font-weight: 500;
    color: #000000d1;
  }

  .input input,
  .input select,
  .input textarea {
    width: 100%;
    font-family: "Mona Sans";
    font-size: 1rem;
    font-weight: 400;
    outline: none;
    padding: 0.8rem 1rem;
    border: 1.5px solid #00000018;
    border-bottom: 3px solid #00000016;
    border-radius: 20px;
    transition: all 0.2s ease-in-out;
  }

  .input textarea{
      height:10rem;
}

  .input input:focus,
  .input select:focus,
  .input textarea:focus {
    border: 1.5px solid #0000006a;
    border-bottom: 3px solid #000000c0;
  }
`;

const IssueButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  width: 100%;
`;


const IssueButton = styled.button`
  padding: 0.8rem 1.6rem;
  background-color: white;
  border: 2px solid #333;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  font-size: 0.9rem;

  &:hover {
    background-color: #333;
    color: white;
  }

  &.selected {
    background-color: #333;
    color: white;
  }
`;

const SubmitButton = styled.button`
  padding: 1rem 2rem;
  background-color: #000000;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 99px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  display: flex;
  gap: 0.5rem;
  align-items: center;

  &:hover {
    background-color: #333;
  }

  svg {
    color: white;
  }
`;

const CompatibilityForm = () => {
  const [selectedIssues, setSelectedIssues] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    issueType: "",
    description: "",
    websiteLink: "",
    screenshot: null,
  });

  const handleIssueSelection = (issue) => {
    setSelectedIssues((prevSelected) =>
      prevSelected.includes(issue)
        ? prevSelected.filter((item) => item !== issue)
        : [...prevSelected, issue]
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    console.log("Selected Issues:", selectedIssues);
  };

  return (
    <RouteTransition>
    <FormContainer>
      <FormTitle>Internship Applications</FormTitle>
      <FormWrapper onSubmit={handleSubmit}>
        <FormGroup>
          <div className="input">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="input">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
        </FormGroup>

        <FormGroup>
          <div className="input">
            <input
              type="text"
              name="phone"
              placeholder="Your Number"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
          <div className="input">
            <select
              name="issueType"
              value={formData.issueType}
              onChange={handleInputChange}
            >
              <option value="">Select Issue Type</option>
              <option value="ui_layout">UI/UX - Layout & Responsiveness</option>
              <option value="ui_interactivity">UI/UX - Interactivity & Animations</option>
              <option value="ui_text_errors">UI/UX - Text & Content Errors</option>
              <option value="func_navigation">Functional - Navigation & Links</option>
              <option value="perf_loading_speed">Performance - Loading Speed</option>
              <option value="security_authentication">
                Security - Authentication & Authorization
              </option>
              <option value="compat_browser">Compatibility - Browser</option>
            </select>
          </div>
        </FormGroup>

        <FormGroup>
          <div className="input">
            <textarea
              name="description"
              placeholder="Describe the issue"
              value={formData.description}
              onChange={handleInputChange}
              required
            />
          </div>
        </FormGroup>

        <FormGroup>
          <div className="input">
            <input
              type="text"
              name="Portfolio Link"
              placeholder="Website Link"
              value={formData.websiteLink}
              onChange={handleInputChange}
            />
          </div>
          <div className="input">
            <input
              type="file"
              name="screenshot"
              accept="image/*"
              onChange={(e) => setFormData({ ...formData, screenshot: e.target.files[0] })}
            />
          </div>
        </FormGroup>

        <h3>Web Development Internships</h3>
        <IssueButtonGroup>
          {[
            "Web Developer (Frontend)",
            "Web Developer (Backend)",
            "Web Developer (Full-Stack)",
            "Web Developer (UI/UX)",
          ].map((role, index) => (
            <IssueButton
              key={index}
              type="button"
              className={selectedIssues.includes(role) ? "selected" : ""}
              onClick={() => handleIssueSelection(role)}
            >
              + {role}
            </IssueButton>
          ))}
        </IssueButtonGroup>

        <h3>Artist Internships</h3>
        <IssueButtonGroup>
          {[
            "3D Artist ",
            "2D Artist",
           
          ].map((role, index) => (
            <IssueButton
              key={index}
              type="button"
              className={selectedIssues.includes(role) ? "selected" : ""}
              onClick={() => handleIssueSelection(role)}
            >
              + {role}
            </IssueButton>
          ))}
        </IssueButtonGroup>

        <h3>Video Editing Internships</h3>
        <IssueButtonGroup>
          {[
            "Video Editor Adobe premiere pro",
            "Video Editor Davinci resolve",
          
          ].map((role, index) => (
            <IssueButton
              key={index}
              type="button"
              className={selectedIssues.includes(role) ? "selected" : ""}
              onClick={() => handleIssueSelection(role)}
            >
              + {role}
            </IssueButton>
          ))}
        </IssueButtonGroup>

        <h3>Creative Design Internships</h3>
        <IssueButtonGroup>
          {[
            "Creative Designer (Branding)",
            "Creative Designer (Packaging)",
            "Creative Designer (UI/UX)",
            "Creative Designer (Graphic Design)",
          ].map((role, index) => (
            <IssueButton
              key={index}
              type="button"
              className={selectedIssues.includes(role) ? "selected" : ""}
              onClick={() => handleIssueSelection(role)}
            >
              + {role}
            </IssueButton>
          ))}
        </IssueButtonGroup>

        <h3>Logo Design Internships</h3>
        <IssueButtonGroup>
          {[
            "Logo Designer",
            "Logo Designer (Brand Identity)",
          ].map((role, index) => (
            <IssueButton
              key={index}
              type="button"
              className={selectedIssues.includes(role) ? "selected" : ""}
              onClick={() => handleIssueSelection(role)}
            >
              + {role}
            </IssueButton>
          ))}
        </IssueButtonGroup>

        <h3>Project Management Internships</h3>
        <IssueButtonGroup>
          {[
            "Project Manager (Product Development)",
            "Project Manager (Agile/Scrum)",
            "Project Manager (Digital Marketing)",
          ].map((role, index) => (
            <IssueButton
              key={index}
              type="button"
              className={selectedIssues.includes(role) ? "selected" : ""}
              onClick={() => handleIssueSelection(role)}
            >
              + {role}
            </IssueButton>
          ))}
        </IssueButtonGroup>

        <h3>Content Writing Internships</h3>
        <IssueButtonGroup>
          {[
            " Content Writer (Blog Writing)",
            " Content Writer (Copywriting)",
            " Content Writer (SEO Writing)",
          ].map((role, index) => (
            <IssueButton
              key={index}
              type="button"
              className={selectedIssues.includes(role) ? "selected" : ""}
              onClick={() => handleIssueSelection(role)}
            >
              + {role}
            </IssueButton>
          ))}
        </IssueButtonGroup>

        <SubmitButton type="submit">
          Submit <FaArrowRight />
        </SubmitButton>
      </FormWrapper>
    </FormContainer>
    </RouteTransition>
  );
};

export default CompatibilityForm;
