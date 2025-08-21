import React from "react";
import Dashnav from "../../Component/Dashnav";
import AirlineConfiguration from "../../Component/FlightSettingManagement/FlightSettingManagement";
import AirportTable from "../../Component/FlightSettingManagement/AirportTable";

export const FlightManagementPage = () => {
  return (
    <div>
      <Dashnav />
      <AirlineConfiguration />
      <AirportTable />
      <AirportTable />
    </div>
  );
};
