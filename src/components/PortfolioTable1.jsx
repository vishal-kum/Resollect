import { Button } from "@mui/material";
import React from "react";

const PortfolioTable = () => {
  const data = [
    { id: "L28U33427", type: "Home Loan", borrower: "Vedika Sachar",borrower_add:"hkfhkshfk",co_borrower_name:"Saritha",co_borrower_add:"delhi",current_dpd:"Education", amount: 1934068, region: "West" },
    { id: "L28U33428", type: "Car Loan", borrower: "Harshita Agarwal",borrower_add:"hkfhkshfk",co_borrower_name:"Ramaswamy",co_borrower_add:"chennai",current_dpd:"Transport", amount: 1842143, region: "North" },
    { id: "L28U33429", type: "Personal Loan", borrower: "Priyansh Soman",borrower_add:"hkfhkshfk",co_borrower_name:"Iyer",co_borrower_add:"Gokuldham",current_dpd:"Scientist", amount: 4537882, region: "East" },
    { id: "L28U33430", type: "Shop Loan", borrower: "Pandit jee",borrower_add:"hkfhkshfk",co_borrower_name:"Jethalal",co_borrower_add:"Gokuldham",current_dpd:"Business", amount: 4537882, region: "East" },
    { id: "L28U33431", type: "Personal Loan", borrower: "MUdavath",borrower_add:"hkfhkshfk",co_borrower_name:"Babita",co_borrower_add:"Gokuldham",current_dpd:"Student", amount: 4537882, region: "East" },
    { id: "L28U33432", type: "Personal Loan", borrower: "Priyansh Soman",borrower_add:"hkfhkshfk",co_borrower_name:"Aiyyar",co_borrower_add:"Gokuldham",current_dpd:"Scientist", amount: 4537882, region: "East" },
    { id: "L28U33433", type: "Personal Loan", borrower: "Priyansh Soman",borrower_add:"hkfhkshfk",co_borrower_name:"Aiyyar",co_borrower_add:"Gokuldham",current_dpd:"Scientist", amount: 4537882, region: "East" },
    { id: "L28U33434", type: "Personal Loan", borrower: "Priyansh Soman",borrower_add:"hkfhkshfk",co_borrower_name:"Aiyyar",co_borrower_add:"Gokuldham",current_dpd:"Scientist", amount: 4537882, region: "East" },
  ];

  return (
    <div className="p-4 w-full bg-white shadow-lg rounded-lg">
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
          <Button
    type="radio"
    name="loanSelect"
    className="peer hidden"
  />
  <label
    className="w-3 h-3 flex border-2 border-gray-500 rounded-sm cursor-pointer peer-checked:bg-blue-500 peer-checked:border-blue-500"
  ></label>
            <th className="p-2">Loan No.</th>
            <th className="p-2">Loan Type</th>
            <th className="p-2">Borrower</th>
            <th className="p-2">Borrower Address</th>
            <th className="p-2">Co Borrower 1 Name</th>
            <th className="p-2">Co Borrower 1 Address</th>
            <th className="p-2">Current DPD</th>
            <th className="p-2">Sanction Amount</th>
            <th className="p-2">Region</th>
          </tr>
        </thead>
        <tbody>
          {data.map((loan) => (
            <tr key={loan.id} className="">
                <Button
    type="radio"
    name="loanSelect"
    className="border-blue-500 "
  />
  <label
    className="w-3 h-3 border-2 border-gray-500 inline-block rounded-sm cursor-pointer peer-checked:bg-blue-500 peer-checked:border-blue-500"
  ></label>
              <td className="p-2 text-blue-500 text-decoration-line: underline">{loan.id}</td>
              <td className="p-2">{loan.type}</td>
              <td className="p-2">{loan.borrower}</td>
              <td className="p-2">{loan.borrower_add}</td>
              <td className="p-2">{loan.co_borrower_name}</td>
              <td className="p-2">{loan.co_borrower_add}</td>
              <td className="p-2">{loan.current_dpd}</td>
              <td className="p-2">₹ {loan.amount.toLocaleString()}</td>
              <td className="p-2">{loan.region}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PortfolioTable;
