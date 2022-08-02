export default function HelloWorld({ html }) {
    return html`
      <style scope="global">
        h1 {
          color: red;
        }
      </style>

      <h1><slot></slot></h1>
    `
  }
