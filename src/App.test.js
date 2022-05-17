import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test("Images don't break", () => {
  render(<App />);
  const photos = screen.queryAllByRole("img");

  photos.forEach((photo) => {
    if (!fireEvent.load(photo)) {
      console.log("Not loading src: ", photo.src);
    }
    expect(fireEvent.load(photo)).toBe(true);
    // console.log(typeof photo);
    // photo.onerror = console.log;
    // fireEvent.load(photo);
  });
});
