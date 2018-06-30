pragma solidity ^0.4.19;

import "./StringUtils.sol";

contract Logging {
    struct Log {
        string adsId;
        uint duration;
    }

    mapping(uint => Log) Logs;
    uint public count = 0;
    function push(string id, uint duration) public {
        bool flag = false;
        for(uint i = 0; i < count; i++){
            if(StringUtils.compare(Logs[i].adsId, id) == 0){
                Logs[i].duration += duration;
                flag = true;
                break;
            }            
        }
        if(!flag){
            Logs[count++] = Log(id,duration);
        }
    }

    function getDuration(string id) public view returns (uint){
        for(uint i = 0; i < count; i++){
            if(StringUtils.compare(Logs[i].adsId, id) == 0){
                return Logs[i].duration;
            }
        }
        return 0;
    }
}