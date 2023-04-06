import React from "react";
import { NavLink } from "react-router-dom";
import SideBarIcon from "../../../shared/ui/SideBarIcon";
import {
  SquaresPlusIcon,
  UserGroupIcon,
  ChartBarIcon,
  ArrowRightOnRectangleIcon,
  RectangleStackIcon, TableCellsIcon, BuildingOfficeIcon
} from "@heroicons/react/24/solid";
import {getCookie} from "../../../shared/utils/Cookies";

const SideNavbar = () => {

  const roleFromCookies = getCookie('role')
  const role = localStorage.getItem('role')
  const isSuperAdmin = getCookie('is_super_admin')
  console.log('role',role)

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
            {role === 'Менеджер' && <>
              <li>
                <NavLink to="/main/admins">
                  <SideBarIcon
                    title="Админы"
                    icon={<SquaresPlusIcon className="w-9" />}
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
            {role === 'Менедже' && <>
                <li>
                  <NavLink to="/main/projects">
                    <SideBarIcon
                      title="Проекты"
                      icon={<SquaresPlusIcon className="w-9" />}
                    />
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/main/users">
                  <SideBarIcon
                  title="Исполнители"
                  icon={<UserGroupIcon className="w-9" />}
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
            {role === 'Менедже' && <>
              <li>
                <NavLink to="/main/projects">
                  <SideBarIcon
                    title="Проекты"
                    icon={<UserGroupIcon className="w-9" />}
                  />
                </NavLink>
              </li>
              <li>
                <NavLink to="/main/project_managers">
                  <SideBarIcon
                    title="Проект менеджеры"
                    icon={<ChartBarIcon className="w-9" />}
                  />
                </NavLink>
              </li>
            </>}

          </ul>
          <NavLink to="/">
            <SideBarIcon
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
