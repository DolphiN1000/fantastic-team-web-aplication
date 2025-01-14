async function submitForm(event) {
    event.preventDefault();

    const formData = Object.fromEntries(new FormData(event.target).entries());

    try {
      const response = await fetch(
        "https://www.form-to-email.com/api/s/UTiw851OywNk",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (!response.ok) {
        // in case of malformed form data
      } else {
        // in case of success
      }
    } catch (error) {
      // in case of form-to-email server not responding
    }
  }