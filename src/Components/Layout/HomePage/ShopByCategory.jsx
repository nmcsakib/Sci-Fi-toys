import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ToyCard from './ToyCard';
import { useEffect, useState } from 'react';

const ShopByCategory = () => {

    const [activeTab, setActiveTab] = useState('physics-toys');
    const [data, setData] = useState([]);
  
    useEffect(() => {
      // Fetch data from API based on active tab
      fetch(`http://localhost:5000/subCategoryToys/${activeTab}`).then((res) => res.json()).then(data => setData(data))
    }, [activeTab]);
    const handleTabClick = (tab) => {
        setActiveTab(tab);
      };
      
    return (
        <>
         <h2 className=" tracking-wide font-bold text-center bg-gradient-to-r from-yellow-500 to-pink-500 text-transparent bg-clip-text text-5xl py-5"> Choose your favorite Category toys!</h2>
        <div className='min-h-screen bg-red-200 flex  justify-center'>
            
            <hr className='bg-black' />
            <Tabs className="text-xl font-semibold w-full" >
    <TabList className='text-center py-10'>
      <Tab onClick={() => handleTabClick('physics-toys')}>Physics Toys</Tab>
      <Tab onClick={() => handleTabClick('chemistry-toys')}>Chemistry Toys</Tab>
      <Tab onClick={() => handleTabClick('biology-toys')}>Biology Toys</Tab>
    </TabList>
<div className='p-10'>
    
<TabPanel>
    <div   className='grid grid-cols-2 gap-5'>

    {
        data?.map(toy => <ToyCard key={toy._id} toy={toy}></ToyCard>)
    }
    </div>

    </TabPanel>
    <TabPanel>
        <div   className='grid grid-cols-2 gap-5'>

    {
        data?.map(toy => <ToyCard key={toy._id} toy={toy}></ToyCard>)
    }
        </div>

    </TabPanel>
    <TabPanel>
        <div   className='grid grid-cols-2 gap-5'>

    {
        data?.map(toy => <ToyCard key={toy._id} toy={toy}></ToyCard>)
    }
        </div>

    </TabPanel>
    
</div>
  </Tabs>
        </div>
        </>
    );
};

export default ShopByCategory;