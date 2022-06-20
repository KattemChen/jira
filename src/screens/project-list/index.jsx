import React from 'react'

import { List } from './list'
import { SearchPanel } from './search-panel'
import { useEffect, useState } from 'react'
import * as qs from 'qs'
import { cleanObject } from '../../utils'
const apiURL = process.env.REACT_APP_API_URL
export const ProjectListScreen = () => {
  const [users, setUsers] = useState([])
  const [list, setList] = useState([])
  const [param, setParam] = useState({
    name: '',
    personId: '',
  })

  useEffect(() => {
    fetch(`${apiURL}/projects?${qs.stringify(cleanObject(param))}`).then(
      async response => {
        if (response.ok) {
          setList(await response.json())
        }
      }
    )
  }, [param])

  useEffect(() => {
    fetch(`${apiURL}/users`).then(async response => {
      if (response.ok) {
        setUsers(await response.json())
      }
    })
  }, [])

  return (
    <div>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List users={users} list={list}></List>
    </div>
  )
}
