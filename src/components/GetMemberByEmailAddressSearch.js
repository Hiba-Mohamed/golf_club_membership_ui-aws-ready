import React from "react";

const GetMemberByEmailSearch = ({ member, members, error, onBack }) => {
  return (
    <div className="tournament-results">
      {error && <p className="error-message">{error}</p>}

      {member && !Array.isArray(member) && (
        <div className="tournament-details">
          <h2>Member Details</h2>
          <hr className="tournament-separator" />
          <p><strong>Name:</strong> {member.memberName}</p>
          <p><strong>Address:</strong> {member.memberAddress}</p>
          <p><strong>Phone Number:</strong> {member.memberPhoneNumber}</p>
          <p><strong>Email Address:</strong> {member.memberEmailAddress}</p>
          <p><strong>Start Date:</strong> {member.memberStartDate}</p>
        </div>
      )}

      {members.length > 0 && (
        <div className="tournament-details">
          <h2>Members Found</h2>
          <hr className="tournament-separator" />
          {members.map((m, index) => (
            <div key={index}>
              <p><strong>Name:</strong> {member.memberName}</p>
              <p><strong>Address:</strong> {member.memberAddress}</p>
              <p><strong>Phone Number:</strong> {member.memberPhoneNumber}</p>
              <p><strong>Email Address:</strong> {member.memberEmailAddress}</p>
              <p><strong>Start Date:</strong> {member.memberStartDate}</p>
              <hr className="tournament-separator" />
            </div>
          ))}
        </div>
      )}

      <button className="go-back-button" onClick={onBack}>
        Go Back
      </button>
    </div>
  );
};

export default GetMemberByEmailSearch;
