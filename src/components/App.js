import React , {useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
  const [contacts, setContacts]= useState([]);
  const LOCAL_STORAGE_KEY = "contacts";

  const addContactHandler  = (contact)=>{
      console.log(contact);
      setContacts([...contacts,{id: uuidv4(), ...contact}]);
  };

  const removeContactHandler = (id) => {
      const newConatactList = contacts.filter((contact) => {
        return contact.id!==id;
      })

      setContacts(newConatactList);
  };

  useEffect(()=>
  {const retriveContacts =  JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    setContacts(retriveContacts);
  }, []);

  useEffect(()=>
  {localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));}, [contacts]);

  return (
    <div >
    <Header/>
    <AddContact addContactHandler={addContactHandler}/>
    <ContactList contacts={contacts} getContactId={removeContactHandler}/>
    </div>
  );
}

export default App;
