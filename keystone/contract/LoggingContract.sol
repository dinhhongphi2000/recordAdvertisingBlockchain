pragma solidity ^0.4.22;
contract LoggingContract {
    struct Logging{
        string date;
        string message;
    }
    uint itemCount;
    mapping(uint => Logging) private data;
    address private owner;
    
    constructor() public {
        owner = msg.sender;
        itemCount = 0;
    }

    function log(string d, string m) public {
        Logging memory a;
        a.date = d;
        a.message = m;
        data[itemCount++] = a; 
    }
    
    function getOwner() public view returns (address){
        return owner;
    }
    
    function getMessage(uint id) public view returns (string date,string message) {
        date = data[id].date;
        message = data[id].message;
    }
}