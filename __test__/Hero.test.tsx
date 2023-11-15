import { expect, test } from "vitest";
import { render, screen, within } from "@testing-library/react";
import Hero from "../src/components/Hero";

test('Hero', () => {
  let dom = render(<Hero />)
  let main = within(screen.getByRole('main'))
  let subHeading = dom.container.querySelector('.sub-heading');
  let link = dom.container.querySelector('.facebook_link');
  expect(main.getAllByRole('heading', { level: 1, name: /I’m Zahid Hasan/ })).toBeDefined()
  expect(subHeading?.textContent).toBe('Front-End Development - UI/UX Designer')
  expect(link).toBeDefined();
})