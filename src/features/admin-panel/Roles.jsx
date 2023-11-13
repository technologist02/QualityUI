import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadRoles, loadUsers, rolesSelector } from "./roles-slice"
// import { InlineCheckBox } from "../../components/FormComponents/InlineCheckBox"
import { UserRoles } from "./UserRoles"

export const Roles = () => {
    const dispatch = useDispatch()
    const roles = useSelector(rolesSelector.selectAll)
    const users = useSelector(state => state.roles.users)
    const loadingRoles = useSelector(state => state.roles.loadingRoles)
    const loadingUsers = useSelector(state => state.roles.loadingUsers)


    const load = loadingRoles === 'fulfilled' && loadingUsers === 'fulfilled'

    useEffect(()=> {dispatch(loadRoles()).then(dispatch(loadUsers()))}, [dispatch])

    return (
        <>
            {load ? (<table className="table">
                <thead>
                    <tr>
                        <th>
                            Пользователь/Роли
                        </th>
                        {roles.map(role => <th key={role.roleId}>{role.function}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => 
                        <UserRoles key={user.userId} user={user}/>
                    )}    
                </tbody>
            </table>) : <h3>Loading</h3>}
            
            
        </>
    )
}