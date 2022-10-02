import {UserType} from '../types/UserType';

export default async ({req, res}) => {
    const query = req.body.query;
    const params = req.body.variables?.parameters;
    const userType = UserType.CUSTOMER ;

    return{
        res,
        query,
        userType
    }
}