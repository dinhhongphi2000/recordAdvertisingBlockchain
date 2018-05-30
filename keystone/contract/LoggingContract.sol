pragma solidity ^0.4.22;
contract LoggingContract {
    struct Logging{
        string createDate;
        string data;
    }
    
    LoggingContract[] private data;
    address private owner;
    
    constructor() public {
        owner = msg.sender;
    }

    function log(string m) public {
        Logging memory a;
        a.createDate = now;
    }
    
    function getOwner() public view returns (address){
        return owner;
    }
    
    function getMessage(uint id) public view returns (string date,string message) {
        date = data[id].date;
        message = data[id].message;
    }
}