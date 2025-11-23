import React from 'react';

export default function Equipment() {
  return (
    <section className="py-5 px-4 bg-dark">
      <div className="container">
        <h2 className="display-4 fw-bold mb-5 text-center text-danger">આપણું પ્રોફેશનલ સેટાપ</h2>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="bg-secondary p-4 rounded border-start border-danger border-4">
              <h3 className="h4 fw-bold mb-3">⚡ સાઉન્ડ સિસ્ટમ</h3>
              <ul className="list-unstyled text-light">
                <li className="mb-2">• હાય-પાવર સ્પીકર્સ (2000W+)</li>
                <li className="mb-2">• પ્રોફેશનલ મિક્સર કન્સોલ</li>
                <li className="mb-2">• માઇક્રોફોન સેટાપ</li>
                <li className="mb-2">• ડીપ બાસ માટે સબવુફર્સ</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="bg-secondary p-4 rounded border-start border-purple border-4">
              <h3 className="h4 fw-bold mb-3">✨ લાઇટિંગ અને ઈફેક્ટ્સ</h3>
              <ul className="list-unstyled text-light">
                <li className="mb-2">• મુવિંગ હેડ લાઇટ્સ</li>
                <li className="mb-2">• પાર કેન લાઇટ્સ</li>
                <li className="mb-2">• ફોગ/સ્મોક મશીન</li>
                <li className="mb-2">• જનરેટર સપોર્ટ</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

