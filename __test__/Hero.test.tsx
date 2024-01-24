import { expect, test } from "vitest";
import { render, screen, within } from "@testing-library/react";
import Intro from "../src/components/v2/Intro";

test('Intro', () => {
  let dom = render(<Intro />)
  let intro = dom.container.querySelector('.intro');
  let aboutMe = dom.container.querySelector('.about');
  expect(intro?.textContent).toBe('I\'m Zahid Hasan');
  expect(aboutMe?.textContent).toBe('A front-end engineer and UI/UX designer helping startups turn their visions into a digital reality. I specialize in designing and building modern mobile and web-based apps.');
})