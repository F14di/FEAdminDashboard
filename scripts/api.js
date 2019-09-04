
const api = {
    getUsersAudit: function(from, to, user, action){
        return [
            {
                date: '1 MAR 2019',
                time: '10:10',
                user: 'Chris',
                activity: 'Login'
            },
            {
                date: '1 APR 2019',
                time: '11:00',
                user: 'Fadi',
                activity: 'Login Failure'
            },
            {
                date: '2 MAY 2019',
                time: '23:00',
                user: 'Shahar',
                activity: 'Add User'
            },
            {
                date: '10 MAY 2019',
                time: '05:30',
                user: 'Samer',
                activity: 'Delete Role'
            },
            {
                date: '10 JUN 2019',
                time: '10:30',
                user: 'Emad',
                activity: 'Delete Role'
            },
            {
                date: '2 JUN 2019',
                time: '23:00',
                user: 'Shahar',
                activity: 'Add User'
            },
            {
                date: '10 AUG 2019',
                time: '20:00',
                user: 'Goerge',
                activity: 'Login'
            },
            {
                date: '13 AUG 2019',
                time: '16:38',
                user: 'Sam',
                activity: 'Login Failure'
            },
        ];
    }
}