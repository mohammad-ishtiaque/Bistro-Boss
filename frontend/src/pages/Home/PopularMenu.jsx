import SectionTitle from '../../components/SectionTitle'
import MenuItems from '../../components/MenuItems';
import useMenu from '../../hooks/useMenu';

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter(item => item.category === 'popular');
  // const [menu, setMenu] = useState([]);
  // useEffect(() => {
  //   fetch('menu.json')
  //     .then(res => res.json())
  //     .then(data => {
  //       const popularItems = data.filter(item => item.category === 'popular')
  //       setMenu(popularItems)
  //     })
  // }, []);
  return (
    <section className='max-w-screen-xl mx-auto'>
      <SectionTitle heading={"From Our Menu"} subHeading={"Popular Items"} />
      <div className="grid md:grid-cols-2 gap-y-8 sm:gap-y-10 md:gap-y-12 gap-x-8 md:gap-x-12 lg:gap-x-16">
        {popular.map((item, index) => (
          <MenuItems key={index} item={item} />
        ))}
      </div>
      <div className="text-center mt-10 sm:mt-12 md:mt-16">
        <button className="uppercase px-6 sm:px-8 py-2 sm:py-3 font-medium relative group overflow-hidden">
          <span className="relative z-10 text-sm sm:text-base cursor-pointer">View Full Menu</span>
          <span className="absolute bottom-0 left-0 w-full h-1 bg-black group-hover:h-full transition-all duration-300 -z-0"></span>
          <span className="relative z-10 text-black group-hover:text-white transition-colors duration-300">
            {/* This span ensures smooth text color transition */}
          </span>
        </button>
      </div>
    </section>
  )
}

export default PopularMenu
