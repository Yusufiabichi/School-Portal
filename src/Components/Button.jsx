
const Button = ({ label, iconURL, backgroundColor, textColor, borderColor, fullwidth }) => {
    return (
      <button className={`flex justify-center items-center py-4 gap-2
      px-7 border font-montserrat text-lg leading-none 
        ${
          backgroundColor 
          ? `${backgroundColor} 
          ${textColor} ${borderColor}`
          : 'bg-coral-red text-white border-coral-red'}
           rounded-full ${fullwidth && 'w-full'}`}>
          {label}
          {iconURL && <img 
          src={iconURL} alt="arrow right icon" 
          className="ml-2 rounded-full w-5 h-5"/>}
      </button>
    )
  }
  
  export default Button