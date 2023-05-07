import { describe, expect, test } from "vitest";
import { hasEnoughLength, isWord, toNumeronym } from "../../src/numeronym/provider";

describe("", () => {
  test("word to numeronym", () => {
    expect(toNumeronym("accessibility")).toBe("a11y");
    expect(toNumeronym("internationalization")).toBe("i18n");
    expect(toNumeronym("localization")).toBe("l10n");
    expect(toNumeronym("pneumonoultramicroscopicsilicovolcanoconiosis")).toBe("p43s");
  });

  test("non word check", () => {
    expect(isWord("accessibility")).toBe(true);

    expect(isWord("lorem ipsum")).toBe(false);
    expect(isWord("a11y")).toBe(false);
  });

  test("non word error check", () => {
    expect(() => toNumeronym("lorem ipsum")).toThrowError();
    expect(() => toNumeronym("a11y")).toThrowError();
  });

  test("word length check", () => {
    expect(hasEnoughLength("accessibility")).toBe(true);
    expect(hasEnoughLength("acc")).toBe(true);

    expect(hasEnoughLength("ac")).toBe(false);
    expect(hasEnoughLength("a")).toBe(false);
  });

  test("non word error check", () => {
    expect(() => toNumeronym("ac")).toThrowError();
    expect(() => toNumeronym("a")).toThrowError();
  });
});
