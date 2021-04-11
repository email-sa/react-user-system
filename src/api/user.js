import { getUserList } from "./../constant/mock/mockUser";
const TimeOut = 1500;

const _getUserList = (cb) => {
    // if (!cb) throw new Error("callback is required");
    setTimeout(() => {
        console.log("***", getUserList());

        cb(getUserList());
    }, TimeOut);
};

export { _getUserList };
