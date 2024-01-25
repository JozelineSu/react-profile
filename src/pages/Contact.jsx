export default function Contact() {
    return (
        <div class="container d-flex justify-content-center align-items-center flex-column vh-100">
            <h1 >Contact Me</h1>
            <form action="" method="get" class="w-50">
                <div class="mb-4">
                    <label class="form-label" for="name">Name: </label>
                    <input class="form-control" type="text" name="name" id="name" required />
                </div>
                <div class="mb-4">
                    <label class="form-label" for="email">Email address: </label>
                    <input class="form-control" type="email" name="email" id="email" required />
                </div>
                <div class="mb-4">
                    <label class="form-label" for="message">Message </label>
                    <textarea class="form-control" type="message" name="message" id="message" required />
                </div>
                <div class="text-center">
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
}