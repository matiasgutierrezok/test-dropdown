import './App.css';
import { useEffect, useRef, useState } from 'react';
import AlertDialog from './components/pop-up';
import ControlledSwitches from './components/switches';

function App() {
  const dummyData = {
    'data': [
      {city: 'Palermo, CABA', address: 'Arce 669', link: '', id: 1, prefix: 'Lic', name: 'Carla Fernandez', specialty: 'Psicología'},
      {city: 'Corrientes', address: 'Córdoba 775', link: '', id: 2, prefix: 'Lic.', name: 'Carla Meyer', specialty: 'Psicología'},
      {city: 'San Martin de los Andes', address: 'Dr. Estanislao Núñez 1420', link: '', id: 3, prefix: 'Lic.', name: 'Isabel Navarro', specialty: 'Psicología'},
      {city: 'Palermo, CABA', address: 'Av Libertador 7500', link: 'professional-list', id: 4, prefix: 'Lic.', name: 'Luciano Guitart', specialty: 'Psicología'},
      {city: 'San Martin de los Andes', address: 'Dr. Estanislao Núñez 1420', link: '', id: 5, prefix: 'Lic.', name: 'Maria Carmen Martinez', specialty: 'Psicología'},
      {city: 'Tucumán', address: 'C. Pellegrini 65', link: '', id: 6, prefix: 'Lic.', name: 'Ortiz Vacis Lorenzo Jose Samuel', specialty: 'Psicología'},
      {city: 'Recoleta, CABA', address: 'Av. Santa Fe 991', link: '', id: 7, prefix: 'Lic.', name: 'Nicolás Zubia', specialty: 'Psicología'},
      {city: 'Palermo, CABA', address: 'Junin 3694 Piso 12', link: '', id: 8, prefix: 'Lic.', name: 'Rafael Rubio', specialty: 'Psicología'},
      {city: 'Recoleta, CABA', address: 'Av. Santa Fe 991', link: '', id: 9, prefix: 'Lic.', name: 'Nicolás Zubia', specialty: 'Psicología'},
      {city: 'Palermo, CABA', address: 'Junin 3694 Piso 12', link: '', id: 10, prefix: 'Lic.', name: 'Rafael Rubio', specialty: 'Psicología'},
      {city: 'Tucumán', address: 'C. Pellegrini 65', link: '', id: 11, prefix: 'Lic.', name: 'Ortiz Vacis Lorenzo Jose Samuel', specialty: 'Psicología'},
      {city: 'Palermo, CABA', address: 'Arce 669', link: '', id: 12, prefix: 'Lic.', name: 'Carla Fernandez', specialty: 'Psicología'},
      {city: 'Corrientes', address: 'Córdoba 775', link: '', id: 13, prefix: 'Lic.', name: 'Carla Meyer', specialty: 'Psicología'},
      {city: 'San Martin de los Andes', address: 'Dr. Estanislao Núñez 1420', link: '', id: 14, prefix: 'Lic.', name: 'Isabel Navarro', specialty: 'Psicología'},
      {city: 'Palermo, CABA', address: 'Av Libertador 7500', link: 'professional-list', id: 15, prefix: 'Lic.', name: 'Luciano Guitart', specialty: 'Psicología'},
      {city: 'San Martin de los Andes', address: 'Dr. Estanislao Núñez 1420', link: '', id: 16, prefix: 'Lic.', name: 'Maria Carmen Martinez'},
      {city: 'Tucumán', address: 'C. Pellegrini 65', link: '', id: 17, prefix: 'Lic.', name: 'Ortiz Vacis Lorenzo Jose Samuel', specialty: 'Psicología'},
      {city: 'Recoleta, CABA', address: 'Av. Santa Fe 991', link: '', id: 18, prefix: 'Lic.', name: 'Nicolás Zubia', specialty: 'Psicología'},
      {city: 'Palermo, CABA', address: 'Junin 3694 Piso 12', link: '', id: 19, prefix: 'Lic.', name: 'Rafael Rubio', specialty: 'Psicología'},
      {city: 'Recoleta, CABA', address: 'Av. Santa Fe 991', link: '', id: 20, prefix: 'Lic.', name: 'Nicolás Zubia', specialty: 'Psicología'},
      {city: 'Palermo, CABA', address: 'Junin 3694 Piso 12', link: '', id: 21, prefix: 'Lic.', name: 'Rafael Rubio', specialty: 'Psicología'},
      {city: 'Tucumán', address: 'C. Pellegrini 65', link: '', id: 22, prefix: 'Lic.', name: 'Ortiz Vacis Lorenzo Jose Samuel', specialty: 'Psicología'},
      {city: 'Palermo, CABA', address: 'Arce 669', link: '', id: 23, prefix: 'Lic.', name: 'Carla Fernandez', specialty: 'Psicología'},
      {city: 'Corrientes', address: 'Córdoba 775', link: '', id: 24, prefix: 'Lic.', name: 'Carla Meyer', specialty: 'Psicología'},
      {city: 'San Martin de los Andes', address: 'Dr. Estanislao Núñez 1420', link: '', id: 25, prefix: 'Lic.', name: 'Isabel Navarro', specialty: 'Psicología'},
      {city: 'Palermo, CABA', address: 'Av Libertador 7500', link: 'professional-list', id: 26, prefix: 'Lic.', name: 'Luciano Guitart', specialty: 'Psicología'},
      {city: 'San Martin de los Andes', address: 'Dr. Estanislao Núñez 1420', link: '', id: 27, prefix: 'Lic.', name: 'Maria Carmen Martinez', specialty: 'Psicología'},
      {city: 'Tucumán', address: 'C. Pellegrini 65', link: '', id: 28, prefix: 'Lic.', name: 'Ortiz Vacis Lorenzo Jose Samuel', specialty: 'Psicología'},
      {city: 'Recoleta, CABA', address: 'Av. Santa Fe 991', link: '', id: 29, prefix: 'Lic.', name: 'Nicolás Zubia', specialty: 'Psicología'},
      {city: 'Palermo, CABA', address: 'Junin 3694 Piso 12', link: '', id: 30, prefix: 'Lic.', name: 'Rafael Rubio', specialty: 'Psicología'},
      {city: 'Recoleta, CABA', address: 'Av. Santa Fe 991', link: '', id: 31, prefix: 'Lic.', name: 'Nicolás Zubia', specialty: 'Psicología'},
      {city: 'Palermo, CABA', address: 'Junin 3694 Piso 12', link: '', id: 32, prefix: 'Lic.', name: 'Rafael Rubio', specialty: 'Psicología'},
      {city: 'Tucumán', address: 'C. Pellegrini 65', link: '', id: 33, prefix: 'Lic.', name: 'Ortiz Vacis Lorenzo Jose Samuel', specialty: 'Psicología'},
      {city: 'Palermo, CABA', address: 'Arce 669', link: '', id: 34, prefix: 'Lic.', name: 'Carla Fernandez', specialty: 'Psicología'},
      {city: 'Corrientes', address: 'Córdoba 775', link: '', id: 35, prefix: 'Lic.', name: 'Carla Meyer', specialty: 'Psicología'},
      {city: 'San Martin de los Andes', address: 'Dr. Estanislao Núñez 1420', link: '', id: 36, prefix: 'Lic.', name: 'Isabel Navarro', specialty: 'Psicología'},
      {city: 'Palermo, CABA', address: 'Av Libertador 7500', link: 'professional-list', id: 37, prefix: 'Lic.', name: 'Luciano Guitart', specialty: 'Psicología'},
      {city: 'San Martin de los Andes', address: 'Dr. Estanislao Núñez 1420', link: '', id: 38, prefix: 'Lic.', name: 'Maria Carmen Martinez', specialty: 'Psicología'},
      {city: 'Tucumán', address: 'C. Pellegrini 65', link: '', id: 39, prefix: 'Lic.', name: 'Ortiz Vacis Lorenzo Jose Samuel', specialty: 'Psicología'},
      {city: 'Recoleta, CABA', address: 'Av. Santa Fe 991', link: '', id: 40, prefix: 'Lic.', name: 'Nicolás Zubia', specialty: 'Psicología'},
      {city: 'Palermo, CABA', address: 'Junin 3694 Piso 12', link: '', id: 41, prefix: 'Lic.', name: 'Rafael Rubio', specialty: 'Psicología'},
      {city: 'Recoleta, CABA', address: 'Av. Santa Fe 991', link: '', id: 42, prefix: 'Lic.', name: 'Nicolás Zubia', specialty: 'Psicología'},
    ]
  }
  
  const [options, setOptions] = useState();
  const [isVisible, setIsVisible] = useState('hidden');
  const [togglesActive, setTogglesActive] = useState(['city', 'address', 'link', 'id', 'prefix', 'name', 'specialty']);
  const dropdownRef = useRef();
  const childRef = useRef()
  const textInput = useRef()

  const handleSearch = async (num) => {
    if(textInput.current.value !== '') {
      setOptions(filterFunction())
    } else {
      setOptions(dataMap(dummyData.data, num))
    }
  }
  
  const filterFunction = () => {
    const data = [];
    let typed = textInput.current.value;
    typed = typed.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    dummyData.data.forEach((e)=> {
      Object.values(e).forEach((d) => {
        if(d !== ''){
          let values = d + '';
          values = values.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
          if(values.toLowerCase().includes(typed.toLowerCase())){
            data.push(d);
          }
        }
      })
    });
    if(data[0] === undefined) {
      return 'No hay resultados';
    } else return data.map((e) => {
      return(
        <div ref={childRef} className='dropdown-option'>
          {e}
        </div>
      )
    })
  }

  const handleBlur = (event) => {
    if(event.relatedTarget === null || !event.currentTarget.contains(event.relatedTarget)){
      setIsVisible('hidden');
    }
  }

  const parametrization = (keyName) => {
    let index = togglesActive.indexOf(keyName);
    const array = togglesActive;
    if(index === -1){
      array.push(keyName);
    } else {
      array.splice(index, 1);
    }
    setTogglesActive(array);
  }

  const dataMap = (optionsArray, start) => {
    if (optionsArray){
      let limit;
      if(start) limit = start + 20;
      else limit = 20;
      let results = [];
      for(let i = 0; optionsArray.length < limit? i < optionsArray.length : i < limit; i++){
        results.push(optionsArray[i]);
      };
      let dataToShow = [];
      results?.map((e)=>{
        let array = '';
        Object.keys(e).forEach((d)=>{
          togglesActive.forEach((f)=>{
            if(f === d){
              array = array + e[d] + ', '
            }
          })
        })
        dataToShow.push(array)
      })
      return dataToShow?.map((e)=> {
        return (
          <div ref={childRef} className='dropdown-option' key={e.id}>
            {e}
          </div>
        )
      })
    }
  }

  const addOption = () => {
    dummyData.data.splice(0, 0, {'userEntry': textInput.current.value})
  }
  
  // let num = 0;
  useEffect(() => {
    // const onChange = (optionsList, observer) => {
    //   const element = optionsList[0];
    //   if(element.isIntersecting) {
    //     num = num + 20;
    //     handleSearch(num)
    //     observer.disconnect();
    //   }
    // }

    // const observer = new IntersectionObserver(onChange, {
    //   root: dropdownRef.current,
    //   rootMargin: '25px',
    // })
    // observer.observe(childRef?.current === undefined ? dropdownRef?.current : childRef?.current)
  })

  const toggles = () => {
    return Object.keys(dummyData.data[0]).map((e)=>{
      return(
        <div>
          {e}
          <ControlledSwitches label={e} cb={parametrization}/>
        </div>
      )
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Test dropdown</p>
        <div className='toggles'>
          {toggles()}
        </div>
        <div 
          className='dropdown'
          onFocus={() => {setIsVisible('visible'); handleSearch()}}
          onBlur={(e) => handleBlur(e)}
        >
          <input
            ref={textInput}
            type="text"
            className='search-input'
            placeholder='Escribe algo para buscar'
            onChange={(e) => {handleSearch()}}
            onKeyUp={(e) => (e.code === 'Enter' || e.code === 'NumpadEnter' || e.key === 'Enter') && handleSearch()}
          />
          <span className="material-icons icons md-24">{isVisible === 'visible'? 'arrow_drop_up' : 'arrow_drop_down'}</span>
          <div tabIndex='-1' className={`dropdown-list ${isVisible}`}>
              <div className='dropdown-list-container' ref={dropdownRef}>
                <AlertDialog userInput={textInput.current?.value} accept={addOption}/>
                {options}
              </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;