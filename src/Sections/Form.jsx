
const Form = () => {
  return (
    <section>
        <div className="flex flex-col gap-3">
            <h1 className="mt-10 text-4xl max-sm:text-[72px]
        max-sm:leading-[82px] font-bold">Registration Form</h1>

            {/* <h3>Fill all the forms appropriately</h3> */}
            <label htmlFor="surname"
            className="pt-5 text-bold text-coral-red text-2xl"
            >
                Surname:</label>
            <input type="text" for="surname" name="surname" id="surname" placeholder="surname" 
            className="p-3 ml-3 border-rounded-full border-slate-gray"/>

            
            <label htmlFor="surname"
            className="pt-5 text-bold text-coral-red text-2xl"
            >
                Other Names:</label>
            <input type="text" for="othernames" name="othernmes" id="othernmes" placeholder="othernmes" 
            className="p-3 ml-3 border-rounded-full border-slate-gray"/>


            <label htmlFor="place-of-birth"
            className="pt-5 text-bold text-coral-red text-2xl"
            >
                Place of Birth:</label>
            <input type="text" for="place-of-birth" name="place-of-birth" id="place-of-birth" placeholder="place-of-birth" 
            className="p-3 ml-3 border-rounded-full border-slate-gray"/>
        </div>
    </section>
  )
}

export default Form