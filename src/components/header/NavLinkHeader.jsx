export default ({ text }) => {
    return (
        <div className="py-4 relative dark:text-white">
            <a href="#" className="hover:text-orange-sneakers peer">{text}</a>
            <span className="absolute bottom-0 block w-full h-1 scale-x-0 transition-all duration-300 peer-hover:scale-x-100 peer-hover:bg-orange-500"></span>
        </div>
    )
}
