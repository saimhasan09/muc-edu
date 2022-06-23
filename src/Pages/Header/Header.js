import React from 'react';

const Header = () => {
  return (
    <div>
      <div class="navbar bg-gray-900 fixed z-20 font-Roboto ">
        <div class="flex-1">
          <a class="btn btn-ghost normal-case text-gray-200 font-lg text-xl">Govt.Mahtab Uddin Degree College</a>
        </div>

        <div class="flex-none">
          <ul class="menu menu-horizontal p-0">
            <li><a className="text-gray-200 font-semibold">Home</a></li>
            <li><a className="text-gray-200 font-semibold">About</a></li>
            <li tabindex="0">
              <a className="text-gray-200 font-semibold">
                Administration
              </a>
              <ul class="p-2 bg-base-100">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
            <li tabindex="0">
              <a className="text-gray-200 font-semibold">
                Academic
              </a>
              <ul class="p-2 bg-base-100">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
            <li tabindex="0">
              <a className="text-gray-200 font-semibold">
                Admission
              </a>
              <ul class="p-2 bg-base-100">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
            <li><a className="text-gray-200 font-semibold">Notice</a></li>
            <li><a className="text-gray-200 font-semibold">Contact</a></li>
            <li><a className="text-gray-200 font-semibold">Login</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;