import React from 'react';
import { team } from './data';

export default function Team() {
  return (
    <section id="team" className="py-5 px-4 bg-secondary">
      <div className="container">
        <h2 className="display-4 fw-bold mb-3 text-center text-danger">આપણી સર્જનશીલ ટીમ સાથે મળો</h2>
        <p className="text-center text-light mb-5">પ્રતિ ઈવેન્ટમાં ઉર્જા લાવતા આવેગી પ્રોફેશનલ્સ</p>
        <div className="row g-4">
          {team.map((member, i) => (
            <div key={i} className="col-md-4">
              <div className="team-member-card">
                <div className="bg-danger bg-gradient p-4 rounded-top text-center">
                  <div className="w-25 h-25 bg-white bg-opacity-25 rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center display-4 team-icon">
                    {member.icon}
                  </div>
                  <h3 className="h3 fw-bold">{member.name}</h3>
                </div>
                <div className="bg-dark p-4 rounded-bottom text-center">
                  <p className="text-danger fw-bold mb-2">{member.role}</p>
                  <p className="text-light mb-3 small">{member.specialty}</p>
                  <a href={`https://wa.me/${member.phone}`} target="_blank" rel="noopener noreferrer" className="btn btn-success">
                    હવે ચેટ કરો
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

