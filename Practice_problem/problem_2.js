const friends = ['rajib','jashim','tuhin','sayeed','himal','munna'];
const uniqueFriends = (friends) =>{
    for(const friend of friends){
        const splitFriend = friend.split('').length;
        if(splitFriend % 2 === 0){
            console.log(friend);
        }
    }
}

const result=uniqueFriends(friends);