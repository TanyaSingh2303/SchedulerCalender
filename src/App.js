import './App.css';
import {Inject,ScheduleComponent, Day, Week, Month, Agenda} from '@syncfusion/ej2-react-schedule';
import {DataManager, WebApiAdaptor} from '@syncfusion/ej2-data';

const remoteData=new DataManager({
  url:'https://js.syncfusion.com/demos/ejservices/api/Schedule/LoadData',
  adaptor: new WebApiAdaptor,
  crossDomain:true,
});

function App() {
  return (
    <div className="App" currentView='Month' selectedDate={new Date(2019,0,11)}>
    <ScheduleComponent>
    <Inject services={[Day, Week, Month, Agenda]}/>
    </ScheduleComponent>

    </div>
  );
}

export default App;
