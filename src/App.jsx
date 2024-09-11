import MainHeader from '@/components/header/MainHeader'
import MainProduct from '@/components/product/MainProduct';
const App = () => {
    return (
        <div className="md:max-w-[1100px] md:mx-auto md:overflow-hidden">
            <MainHeader />
            <MainProduct />
        </div>
    );
};

export default App;
