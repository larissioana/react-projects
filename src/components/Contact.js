

const Contact=()=>{
    return(
        <>
        <form name='contact' method='post'>
        <input type="hidden" name="form-name" value="contact" />
            <h2>Contact</h2>
            <label htmlFor="name">Name & Surname</label>
            <input type='text' name='name' placeholder="Name - Surname" required/>
            <label htmlFor="email">Email</label>
            <input type='text' name='email' placeholder="Email" required/>
            <label htmlFor="message">Message</label>
            <textarea name="message" required/>
            <button type='submit' className="submit-btn">Send</button>
        </form>
        </>
    )
}
export default Contact;