//
//
//~~ A.  Historyjka - co rozwiązuję tutaj? - Word'owski rozdział name wklejony
//
//       A.1. parent rozdział nr 1
//
//           A.1.1. child rozdział nr 1
//
//~~ B.  Historyjka druga ...
//

import styles from "src/styles/sass/styles-all.module.scss";

const StronaKontakt = () => {
  async function handleOnSubmit(e) {
    e.preventDefault();

    const formData = {};

    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });

    await fetch("/api/sendgrid-send-email", {
      method: "POST",
      body: JSON.stringify(formData),
    });
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <p>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" name="name" />
      </p>
      <p>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" name="email" />
      </p>
      <p>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" />
      </p>
      <p>
        <button>Submit</button>
      </p>
    </form>
  );
};
export default StronaKontakt;
