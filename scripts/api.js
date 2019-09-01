
const api = {
    getUsersAudit: function(from, to, user, action){
        return [
            {
                date: '2019 MAR 1',
                time: '10:10',
                user: 'Chris',
                activity: 'Login'
            },
            {
                date: '2019 APR 1',
                time: '11:00',
                user: 'Fadi',
                activity: 'Login Failure'
            },
            {
                date: '2019 MAY 2',
                time: '23:00',
                user: 'Shahar',
                activity: 'Add User'
            },
            {
                date: '2019 MAY 10',
                time: '05:30',
                user: 'Samer',
                activity: 'Delete Role'
            },
            {
                date: '2019 JUN 10',
                time: '10:30',
                user: 'Emad',
                activity: 'Delete Role'
            },
            {
                date: '2019 JUN 2',
                time: '23:00',
                user: 'Shahar',
                activity: 'Add User'
            },
            {
                date: '2019 AUG 10',
                time: '20:00',
                user: 'Goerge',
                activity: 'Login'
            },
            {
                date: '2019 AUG 13',
                time: '16:38',
                user: 'Sam',
                activity: 'Login Failure'
            },
        ];
    }
}