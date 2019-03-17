import { MemberEntity } from '../interface/membersModel'

var MembersMockData: MemberEntity[] =
[
    {
        id: 42657202,
        login: "GJSL",
        avatar_url: "https://avatars3.githubusercontent.com/u/42657202?v=4"
    },
    {
        id: 3127722,
        login: "Cheekujha",
        avatar_url: "https://avatars3.githubusercontent.com/u/3127722?v=4"
    }
];

class MemberAPI {
    //This would be performed on the server in a real app. Just stubbing in.
    private _clone(item) {
        return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
    };

    // Just return a copy of the mock data
    getAllMembers(): Array<MemberEntity> {
        return this._clone(MembersMockData);
    }
}

export const memberAPI = new MemberAPI();