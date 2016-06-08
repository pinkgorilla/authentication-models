##**Map**

maps `type` to mongo db `collection` name


###**Definition**
``` javascript
var map = { 
        Account: "accounts",
        UserOrganizationInfo: "user-organization-infos",
        UserProfile: "user-profiles" 
}
``` 



###**Usage**

```
    var map = require('authentication-models').map;
    
    //prints 'user-organization-infos'
    console.log(map.UserOrganizationInfo)
```