import React from 'react'
import ReviewTable from '../../Component/ReviewTable'
import Dashnav from '../../Component/Dashnav';
import SettingAccount from '../../Component/Settings/Account';
import AdminManagement from '../../Component/Settings/AdminManagement';
import RoleSettingsAndActivityLog from '../../Component/Settings/RoleSettingsAndActivityLog';

  const SettingPage = () => {
  return (
    <div>
        <Dashnav />
        <SettingAccount />
        <div className="flex justify-center w-full">
<AdminManagement />
        </div>
        <RoleSettingsAndActivityLog />
        
    </div>
  )
}
export default SettingPage;