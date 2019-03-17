import * as React from 'react';
import { MemberEntity } from './interface/membersModel';
import { MemberRow } from './membersRow';
import { memberAPI } from './membersAPI/membersAPI';

interface State {
    members: Array<MemberEntity>
}

interface Props {
}

export class MembersTableComponent extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
    
        this.state = { members: [] };
    }

    componentDidMount() {
        this.setState({members: memberAPI.getAllMembers()})
    }

    render() {
        return (
            <div className="table">
                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                Avatar
                            </th>
                            <th>
                                Id
                            </th>
                            <th>
                                Name
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.members.map((member: MemberEntity) =>
                                <MemberRow key={member.id} member={member} />
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}