import './App.css'
import Controlfield from './component/ControlledFiled/Controlfield'
import FormAction from './component/FormAction/FormAction'
import HookForm from './component/HookForm/HookForm'
import ProductManagement from './component/ProductMangement/ProductManagement'
import SimpleForm from './component/SimpleForm/SimpleForm'
import UncontrolField from './component/UncontroledField/UncontrolField'

function App() {


  return (
    <>

      <h1>Explore React Form</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <FormAction></FormAction> */}
      {/* <Controlfield></Controlfield> */}
      {/* <UncontrolField></UncontrolField> */}
      {/* <HookForm></HookForm> */}
      <ProductManagement></ProductManagement>
    </>
  )
}

export default App
