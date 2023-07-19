import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import AllExperiences from "./AllExperiences";
import "./css/Important.css";
import SearchBar from "./SearchBar";

function Important({ questions }) {
  const [searchTerm, setSearchTerm] = useState("");

  function searchFilter(q) {
    return q.title.toLowerCase().includes(searchTerm.toLowerCase());
  }

  const filteredQuestions = questions.filter(searchFilter);

  return (
    <div className="main">
      <div className="main-container">
        <div className="main-top">
          <h2>All Experiences</h2>
          <Link to="/add-experience">
            <button>Share Your Experience</button>
          </Link>
        </div>
        <div className="main-desc">
          <p>{filteredQuestions.length} questions</p>
          <SearchBar setSearchTerm={setSearchTerm} />
        </div>
        <div className="questions">
          {filteredQuestions?.map((_q) => (
            // <div className="question" key={_q._id}>
              <div className="question">
              <AllExperiences data={_q} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Important;
