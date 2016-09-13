import {appModule} from "./appModule";
import {AppComponent} from "./components/app";

AppComponent;

appModule.run(()=> {
    console.log("run");
});
