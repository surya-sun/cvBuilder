import Detailes from "../screens/detailes";
import Education from "../screens/education";
import Languages from "../screens/languages";
import Skills from "../screens/skils";
import Summary from "../screens/summary";
import WorkHistory from "../screens/workHistory";

const routes = [
    {name:"Detailes" , path:"/" , icon : "bi bi-ticket-detailed" ,  element : Detailes  },
    {name:"Summary" , path:"/Summary" , icon:"bi bi-info-circle",  element : Summary  },
    {name:"Education" , path:"/Education" , icon:"bi bi-backpack" , element : Education  },
    {name:"Languages" , path:"/Languages" , icon:"bi bi-translate" , element : Languages  },
    {name:"Skills" , path:"/Skills" , icon:"bi bi-tools" , element : Skills  },
    {name:"WorkHistory" , path:"/WorkHistory" , icon : "bi bi-clock-history" , element : WorkHistory  }
];

export default routes;