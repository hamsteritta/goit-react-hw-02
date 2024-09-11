const Description = () => {

    const infoTxt = {
        name: 'Sip Happens Café',
        description: 'Please leave your feedback about our service by selecting one of the options below.'
    };

    return <div>
         <h1>{infoTxt.name}</h1>
         <p>{infoTxt.description}</p>
    </div>
}
export default Description;