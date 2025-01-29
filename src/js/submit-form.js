console.log("submit foo loaded")
async function submitForm(event) {
  event.preventDefault();

  const formData = Object.fromEntries(new FormData(event.target).entries());

  try {
    // const response = await fetch("https://www.form-to-email.com/api/s/UTiw851OywNk", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formData),
    // });
    console.log("sending");
    alert("sending...");
    if (response.ok) {
      // in case of success
    } else {
      // in case of malformed form data
    }
  } catch (error) {
    // in case of form-to-email server not responding (e.g. connection lost)
  }
}
