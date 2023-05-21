import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ToyCard from './ToyCard';
import { useEffect, useState } from 'react';

const ShopByCategory = () => {

    const [activeTab, setActiveTab] = useState('physics-toys');
    const [data, setData] = useState([]);


    useEffect(() => {
        // Fetch data from API based on active tab
        fetch(`https://sci-fi-toy-server-nmcsakib.vercel.app/subCategoryToys/${activeTab}`).then((res) => res.json()).then(data => setData(data))
    }, [activeTab]);
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>
            <h2 className="section-title"> Choose your favorite Category's toys!</h2>
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
                            <div className='grid md:grid-cols-2 gap-5'>

                                {
                                    data?.map(toy => <ToyCard key={toy._id} toy={toy}></ToyCard>)
                                }
                            </div>

                        </TabPanel>
                        <TabPanel>
                            <div className='grid grid-cols-2 gap-5'>

                                {
                                    data?.map(toy => <ToyCard key={toy._id} toy={toy}></ToyCard>)
                                }
                            </div>

                        </TabPanel>
                        <TabPanel>
                            <div className='grid grid-cols-2 gap-5'>

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