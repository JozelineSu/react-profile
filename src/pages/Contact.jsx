export default function Contact() {
    return (
        <div className="container d-flex justify-content-center align-items-center flex-column vh-100">
            <h1 >Contact Me</h1>
            <form action="" method="get" className="w-50">
                <div className="mb-4">
                    <label className="form-label" for="name">Name: </label>
                    <input className="form-control" type="text" name="name" id="name" required />
                </div>
                <div className="mb-4">
                    <label className="form-label" for="email">Email address: </label>
                    <input className="form-control" type="email" name="email" id="email" required />
                </div>
                <div className="mb-4">
                    <label className="form-label" for="message">Message </label>
                    <textarea className="form-control" type="message" name="message" id="message" required />
                </div>
                <div className="text-center">
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
}