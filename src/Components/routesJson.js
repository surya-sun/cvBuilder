import Detailes from "../screens/detailes";
import Education from "../screens/education";
import Languages from "../screens/languages";
import Skills from "../screens/skils";
import Summary from "../screens/summary";
import WorkHistory from "../screens/workHistory";

const routes = [
    {name:"Detailes" , path:"/" , icon : "bi bi-ticket-detailed" ,  element : Detailes  , active:true  },
    {name:"Summary" , path:"/Summary" , icon:"bi bi-info-circle",  element : Summary , active:false  },
    {name:"Education" , path:"/Education" , icon:"bi bi-backpack" , element : Education , active:false },
    {name:"Languages" , path:"/Languages" , icon:"bi bi-translate" , element : Languages , active:false },
    {name:"Skills" , path:"/Skills" , icon:"bi bi-tools" , element : Skills ,active:false },
    {name:"WorkHistory" , path:"/WorkHistory" , icon : "bi bi-clock-history" , element : WorkHistory ,active:false  }
];


const customStyles_note_type_dropdown = {
    container: (base) => ({
        ...base,
        width: '130px',
        display: 'inline-block',
        color: 'black'
    }),  
    valueContainer: (provided, state) => ({
        ...provided,
        maxHeight: '80px !important',
        padding: '0 6px',
        //old code
        //        overflowY: 'scroll',
        // old code
        overflowY: 'auto',
         "::-webkit-scrollbar": {
           width: "5px"
         }
      }),
    control: (base) => ({
        ...base,
        minHeight: 24,
        height: 'auto',
    }),
    placeholder: (base) => ({
        ...base,
        top: 10,
    }),
    indicatorSeparator: (base) => ({
        ...base,
        minHeight: 19,
        marginTop: '0',
        marginBottom: '0',
    }),
  
    dropdownIndicator: (base, state) => ({
        ...base,
        padding: 0,
        marginTop: 0,
        height:"10 px",
        transition: "all .2s ease",
        //transform: state.isFocused ? "rotate(180deg)" : null
    }
    ),
    
  }

export default routes;