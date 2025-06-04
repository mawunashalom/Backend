import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UtilisateurList } from "./utilisateur/UtilisateurList";
import { UtilisateurCreate } from "./utilisateur/UtilisateurCreate";
import { UtilisateurEdit } from "./utilisateur/UtilisateurEdit";
import { UtilisateurShow } from "./utilisateur/UtilisateurShow";
import { EmployeList } from "./employe/EmployeList";
import { EmployeCreate } from "./employe/EmployeCreate";
import { EmployeEdit } from "./employe/EmployeEdit";
import { EmployeShow } from "./employe/EmployeShow";
import { HopitalList } from "./hopital/HopitalList";
import { HopitalCreate } from "./hopital/HopitalCreate";
import { HopitalEdit } from "./hopital/HopitalEdit";
import { HopitalShow } from "./hopital/HopitalShow";
import { HistoriqueActionList } from "./historiqueAction/HistoriqueActionList";
import { HistoriqueActionCreate } from "./historiqueAction/HistoriqueActionCreate";
import { HistoriqueActionEdit } from "./historiqueAction/HistoriqueActionEdit";
import { HistoriqueActionShow } from "./historiqueAction/HistoriqueActionShow";
import { DgtcpList } from "./dgtcp/DgtcpList";
import { DgtcpCreate } from "./dgtcp/DgtcpCreate";
import { DgtcpEdit } from "./dgtcp/DgtcpEdit";
import { DgtcpShow } from "./dgtcp/DgtcpShow";
import { PatientList } from "./patient/PatientList";
import { PatientCreate } from "./patient/PatientCreate";
import { PatientEdit } from "./patient/PatientEdit";
import { PatientShow } from "./patient/PatientShow";
import { RendezVousList } from "./rendezVous/RendezVousList";
import { RendezVousCreate } from "./rendezVous/RendezVousCreate";
import { RendezVousEdit } from "./rendezVous/RendezVousEdit";
import { RendezVousShow } from "./rendezVous/RendezVousShow";
import { DossierMedicalList } from "./dossierMedical/DossierMedicalList";
import { DossierMedicalCreate } from "./dossierMedical/DossierMedicalCreate";
import { DossierMedicalEdit } from "./dossierMedical/DossierMedicalEdit";
import { DossierMedicalShow } from "./dossierMedical/DossierMedicalShow";
import { FichierJointList } from "./fichierJoint/FichierJointList";
import { FichierJointCreate } from "./fichierJoint/FichierJointCreate";
import { FichierJointEdit } from "./fichierJoint/FichierJointEdit";
import { FichierJointShow } from "./fichierJoint/FichierJointShow";
import { OrdonnanceList } from "./ordonnance/OrdonnanceList";
import { OrdonnanceCreate } from "./ordonnance/OrdonnanceCreate";
import { OrdonnanceEdit } from "./ordonnance/OrdonnanceEdit";
import { OrdonnanceShow } from "./ordonnance/OrdonnanceShow";
import { LigneOrdonnanceList } from "./ligneOrdonnance/LigneOrdonnanceList";
import { LigneOrdonnanceCreate } from "./ligneOrdonnance/LigneOrdonnanceCreate";
import { LigneOrdonnanceEdit } from "./ligneOrdonnance/LigneOrdonnanceEdit";
import { LigneOrdonnanceShow } from "./ligneOrdonnance/LigneOrdonnanceShow";
import { MedicamentList } from "./medicament/MedicamentList";
import { MedicamentCreate } from "./medicament/MedicamentCreate";
import { MedicamentEdit } from "./medicament/MedicamentEdit";
import { MedicamentShow } from "./medicament/MedicamentShow";
import { RetraitStockList } from "./retraitStock/RetraitStockList";
import { RetraitStockCreate } from "./retraitStock/RetraitStockCreate";
import { RetraitStockEdit } from "./retraitStock/RetraitStockEdit";
import { RetraitStockShow } from "./retraitStock/RetraitStockShow";
import { DepenseList } from "./depense/DepenseList";
import { DepenseCreate } from "./depense/DepenseCreate";
import { DepenseEdit } from "./depense/DepenseEdit";
import { DepenseShow } from "./depense/DepenseShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"hopital"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Utilisateur"
          list={UtilisateurList}
          edit={UtilisateurEdit}
          create={UtilisateurCreate}
          show={UtilisateurShow}
        />
        <Resource
          name="Employe"
          list={EmployeList}
          edit={EmployeEdit}
          create={EmployeCreate}
          show={EmployeShow}
        />
        <Resource
          name="Hopital"
          list={HopitalList}
          edit={HopitalEdit}
          create={HopitalCreate}
          show={HopitalShow}
        />
        <Resource
          name="HistoriqueAction"
          list={HistoriqueActionList}
          edit={HistoriqueActionEdit}
          create={HistoriqueActionCreate}
          show={HistoriqueActionShow}
        />
        <Resource
          name="Dgtcp"
          list={DgtcpList}
          edit={DgtcpEdit}
          create={DgtcpCreate}
          show={DgtcpShow}
        />
        <Resource
          name="Patient"
          list={PatientList}
          edit={PatientEdit}
          create={PatientCreate}
          show={PatientShow}
        />
        <Resource
          name="RendezVous"
          list={RendezVousList}
          edit={RendezVousEdit}
          create={RendezVousCreate}
          show={RendezVousShow}
        />
        <Resource
          name="DossierMedical"
          list={DossierMedicalList}
          edit={DossierMedicalEdit}
          create={DossierMedicalCreate}
          show={DossierMedicalShow}
        />
        <Resource
          name="FichierJoint"
          list={FichierJointList}
          edit={FichierJointEdit}
          create={FichierJointCreate}
          show={FichierJointShow}
        />
        <Resource
          name="Ordonnance"
          list={OrdonnanceList}
          edit={OrdonnanceEdit}
          create={OrdonnanceCreate}
          show={OrdonnanceShow}
        />
        <Resource
          name="LigneOrdonnance"
          list={LigneOrdonnanceList}
          edit={LigneOrdonnanceEdit}
          create={LigneOrdonnanceCreate}
          show={LigneOrdonnanceShow}
        />
        <Resource
          name="Medicament"
          list={MedicamentList}
          edit={MedicamentEdit}
          create={MedicamentCreate}
          show={MedicamentShow}
        />
        <Resource
          name="RetraitStock"
          list={RetraitStockList}
          edit={RetraitStockEdit}
          create={RetraitStockCreate}
          show={RetraitStockShow}
        />
        <Resource
          name="Depense"
          list={DepenseList}
          edit={DepenseEdit}
          create={DepenseCreate}
          show={DepenseShow}
        />
      </Admin>
    </div>
  );
};

export default App;
