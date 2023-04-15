import React, {useEffect} from "react";
import { NavLink } from "react-router-dom";
import SideBarIcon from "../../../shared/ui/SideBarIcon";
import {
  SquaresPlusIcon,
  UserGroupIcon,
  ChartBarIcon,
  ArrowRightOnRectangleIcon,
  RectangleStackIcon, TableCellsIcon, BuildingOfficeIcon
} from "@heroicons/react/24/solid";

const SideNavbar = () => {

  const role = localStorage.getItem('role');
  const is_super_admin = localStorage.getItem('is_super_admin');
  console.log('role', role)

  const handleLogout = () => {
    localStorage.removeItem('role')
    localStorage.removeItem('token')
    localStorage.removeItem('is_super_admin')
  }


  return (
    <>
      <div
        className="h-screen w-92 m-0
                        flex flex-col
                        bg-gray-700 text-white shadow-lg"
      >
        <div>
          <SideBarIcon icon={<RectangleStackIcon className="w-9" />} />
        </div>
        <br />
        <br />
        <br />
        <div className="flex flex-col justify-between h-screen">
          <ul>
            {is_super_admin == 'true' && <>
                <li>
                  <NavLink to="/main/admins">
                    <SideBarIcon
                      title="Админы"
                      icon={<UserGroupIcon className="w-9" />}
                    />
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/main/organizations">
                    <SideBarIcon
                      title="Организации"
                      icon={<BuildingOfficeIcon  className="w-9" />}
                    />
                  </NavLink>
                </li>

              </>}

            {/*Admin*/}
            {role == 'Админ' && is_super_admin == 'false' && <>

              <li>
                <NavLink to="/main/projects">
                  <SideBarIcon
                    title="Проекты"
                    icon={<SquaresPlusIcon className="w-9" />}
                  />
                </NavLink>
              </li>
              <li>
                <NavLink to="/main/project_managers">
                  <SideBarIcon
                    title="Проект менеджеры"
                    icon={<UserGroupIcon className="w-9" />}
                  />
                </NavLink>
              </li>

            </>}

            {/*Project Manager*/}
            {role === 'Менеджер' && <>
                  <li>
                    <NavLink to="/main/projects">
                      <SideBarIcon
                        title="Проекты"
                        icon={<SquaresPlusIcon className="w-9" />}
                      />
                    </NavLink>
                  </li>
                <li>
                  <NavLink to="/main/iterations">
                    <SideBarIcon
                      title="Итерации"
                      icon={<TableCellsIcon className="w-9" />}
                    />
                  </NavLink>
                </li>
              </>}
          </ul>
          <NavLink to="/">
            <SideBarIcon onClick={handleLogout}
              title="Выход"
              icon={<ArrowRightOnRectangleIcon className="w-9" />}
            />
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default SideNavbar;
