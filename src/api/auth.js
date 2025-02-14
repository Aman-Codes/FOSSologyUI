/*
 Copyright (C) 2021 Aman Dwivedi (aman.dwivedi5@gmail.com)
 
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

import sendRequest from "./sendRequest";
import { endpoints } from "../constants/endpoints";
import {
  tokenNameLength,
  tokenScope,
  tokenExpiryDays,
} from "../constants/auth";
import { randomString, getDate } from "../shared/helper";

export const fetchTokenApi = (username, password) => {
  const url = endpoints.auth.tokens();
  return sendRequest({
    url,
    method: "POST",
    credentials: "include",
    body: {
      username,
      password,
      token_name: randomString(tokenNameLength),
      token_scope: tokenScope,
      token_expire: getDate(tokenExpiryDays),
    },
  });
};
