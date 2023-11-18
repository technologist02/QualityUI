import { useDispatch } from "react-redux";
import { InlineCheckBox } from "../../components/FormComponents/InlineCheckBox";
import { setRole, updateUserRoles } from "./roles-slice";

export const UserRoles = ({ user }) => {
    const dispatch = useDispatch();
    const roles = user.roles;


    const userUpdateView = {userId: user.userId, roleIds: user.roles.filter(r=>r.status).map(x => x.roleId)}
    // console.log(userUpdateView)
    // {userId: user.userId, roleIds: [...user.roles.map(r=>r.roleId)]}
    return (
        <>
            <tr>
                <td>{user.login} - {user.name} {user.surname}</td>
                {roles.map((role) => (
                    <td key={role.roleId}>
                        <InlineCheckBox
                            value={role.status}
                            setValue={() =>
                                dispatch(
                                    setRole({
                                        userId: user.userId,
                                        roleId: role.roleId,
                                    })
                                )
                            }
                        />
                    </td>
                ))}
                <td>
                    <button type="button" className="btn btn-outline-warning" onClick={() => dispatch(updateUserRoles(userUpdateView))}>
                        Назначить роли
                    </button>
                </td>
            </tr>
        </>
    );
};
