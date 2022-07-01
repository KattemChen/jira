import React from 'react'

import { List } from './list'
import { SearchPanel } from './search-panel'
import { useEffect, useState } from 'react'
import * as qs from 'qs'
import { cleanObject, useDebounce, useMount } from '../../utils'

const apiURL = process.env.REACT_APP_API_URL

export const ProjectListScreen = () => {
  const [users, setUsers] = useState([])
  const [list, setList] = useState([])
  const [param, setParam] = useState({
    name: '',
    personId: '',
  })
  const debouncedParam = useDebounce(param, 200)

  useEffect(() => {
    fetch(
      `${apiURL}/projects?${qs.stringify(cleanObject(debouncedParam))}`
    ).then(async response => {
      if (response.ok) {
        setList(await response.json())
      }
    })
  }, [debouncedParam])

  useMount(() => {
    fetch(`${apiURL}/users`).then(async response => {
      if (response.ok) {
        setUsers(await response.json())
      }
      console.log(111)
    })
  })

  return (
    <div>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List users={users} list={list}></List>
    </div>
  )
}
