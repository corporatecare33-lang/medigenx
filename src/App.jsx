import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import About from './pages/About';
import MedicalEquipment from './pages/MedicalEquipment';
import LinaTechVenusX from './pages/LinaTechVenusX';
import { 
  ImmobilizationDevices, 
  AlignmentSystems, 
  RadiologyImaging, 
  RoboticEquipment, 
  Histopathology, 
  OtherEquipment 
} from './pages/EquipmentCategories';
import Consumables from './pages/Consumables';
import Services from './pages/Services';
import AfterSales from './pages/AfterSales';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';
import ThankYou from './pages/ThankYou';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="medical-equipment" element={<MedicalEquipment />} />
          <Route path="medical-equipment/linatech-venusx" element={<LinaTechVenusX />} />
          <Route path="medical-equipment/immobilization-devices" element={<ImmobilizationDevices />} />
          <Route path="medical-equipment/alignment-systems" element={<AlignmentSystems />} />
          <Route path="medical-equipment/radiology-imaging" element={<RadiologyImaging />} />
          <Route path="medical-equipment/robotic-medical-equipment" element={<RoboticEquipment />} />
          <Route path="medical-equipment/histopathology-equipment" element={<Histopathology />} />
          <Route path="medical-equipment/other-medical-equipment" element={<OtherEquipment />} />
          <Route path="consumables" element={<Consumables />} />
          <Route path="services" element={<Services />} />
          <Route path="after-sales" element={<AfterSales />} />
          <Route path="contact" element={<Contact />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="thank-you" element={<ThankYou />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
