```
tableFactory(action) {
  switch (action) {
    case 'update':
      ...
      break;
    
    case 'create':
      ...
      break;
      
    case 'delete':
      ...
      break;
  
    default:
      // ...默认获取列表
      break;
  }
}
```