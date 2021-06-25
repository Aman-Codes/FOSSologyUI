/*
 Copyright (C) 2021 Shruti Agarwal (mail2shruti.ag@gmail.com)

 SPDX-License-Identifier: GPL-2.0

 This program is free software; you can redistribute it and/or
 modify it under the terms of the GNU General Public License
 version 2 as published by the Free Software Foundation.
 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License along
 with this program; if not, write to the Free Software Foundation, Inc.,
 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
*/

import React from "react";
import PropTypes from "prop-types";

const InputContainer = ({
  type,
  name,
  value,
  id,
  className = null,
  onChange,
  children,
  checked = false,
  placeholder = null,
}) => {
  return (
    <div>
      {type === "radio" ? (
        <div className="my-0">
          <input
            type={type}
            name={name}
            value={value}
            className={`mr-2 ${className}`}
            onChange={onChange}
            checked={checked}
          />
          <label htmlFor={id} className="font-medium">
            {children}
          </label>
        </div>
      ) : (
        <div className="my-2">
          <label htmlFor={id} className="font-demi">
            {children}
          </label>
          <input
            type={type}
            name={name}
            value={value}
            className={`form-control ${className}`}
            onChange={onChange}
            checked={checked}
            placeholder={placeholder}
          />
        </div>
      )}
    </div>
  );
};

InputContainer.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  children: PropTypes.node,
};

export default InputContainer;
