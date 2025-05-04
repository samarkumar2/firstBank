import React from 'react'
import BasicTabs from '../../components/Tab/Tabs';
import SettingEdit from './SettingEdit';
import SettingPreferances from './SettingPreferances';
import Security from './Security';
export default function Setting(props) {
    const settingLabel = ['Edit Profile','Preferences','Security'];
    const {userData} = props;

  return (
    <div className='form-group'>
    <BasicTabs settingLabel={settingLabel} firstComp={<SettingEdit empData={userData}/>} secondComp ={<SettingPreferances/>}
    thirdComp={<Security/>}
    />

    </div>
  )
}
