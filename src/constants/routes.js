/*
 Copyright (C) 2021 Aman Dwivedi (aman.dwivedi5@gmail.com), Shruti Agarwal (mail2shruti.ag@gmail.com)

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

export const routes = {
  home: "/",
  login: "/login",
  search: "/search",
  browse: "/browse",
  uploads: {
    file: "/uploads/file",
    server: "/uploads/server",
    url: "/uploads/url",
    versionControlSystem: "/uploads/vcs",
    report: "/uploads/report",
    instructions: "/uploads/instructions",
  },
  jobs: {
    myRecentJobs: "/jobs/myRecentJobs",
    allRecentJobs: "/jobs/allRecentJobs",
    scheduleAgents: "/jobs/scheduleAgents",
  },
  organize: {
    folders: {
      create: "/organize/folders/create",
      delete: "/organize/folders/delete",
      edit: "/organize/folders/edit",
    },
    licenses: "/organize/licenses",
    uploads: {
      delete: "/organize/uploads/delete",
      edit: "/organize/uploads/edit",
      move: "/organize/uploads/move",
    },
  },
  help: {
    overview: "/help/overview",
    licenseBrowser: "/help/licenseBrowser",
  },
};
