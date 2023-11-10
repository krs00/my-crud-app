function Form() {


    return (
        <>
            <form action="http://www.foo.com" method="POST">
                <div>
                    <label for="say">What is your name?</label>
                    <br></br> 
                    <input name="name" id="name" required />
                </div>

                <br></br>

                <div>
                    <label for="message">Message:</label>
                    <br></br>
                    <textarea id="message" name="message" rows="4" cols="25" required></textarea>
                </div>
                <br></br>
                <div>
                    <button>Send my message!</button>
                </div>
            </form>

        </>
    )
}

export default Form
