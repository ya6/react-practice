class StorageService {
  static saveUser = (userData) => {
    window.localStorage.setItem("user", JSON.stringify(userData));
  };

  static loadSavedUser = () => {
    if ( window.localStorage.getItem('user')) {
    const  user = window.localStorage.getItem('user')
      return JSON.parse(user);
  } else return null;
}

  static clearUser = () => {
    window.localStorage.removeItem("user");
  };
}
export default StorageService;

// export default class Storage {
//     static saveToStorage(name: string, data:{}) {
//       localStorage.setItem(name, JSON.stringify(data));
//     }

//     static loadFromStorage(name: string) {
//       const itemStr = localStorage.getItem(name);
//       if (itemStr === null) return null;
//       return JSON.parse(itemStr);
//     }
//   }
