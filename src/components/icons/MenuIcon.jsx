const MenuIcon = (props) => {
    return (
        <svg {...props} width="16" height="15" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z" fill="#69707D" fillRule="evenodd" />
        </svg>
        /*Cuidar los atributos con que se trabaja en jsx, por ejemplo fill-rule no funcion y se tiene que cambiar a 
        formato camelcase*/
    )
}
export default MenuIcon