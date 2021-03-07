import {checkUrl} from '../src/client/js/urlChecker'

describe("check url", () => {
    test("the url should be a valid URL", () => {
      const url_input = "https://www.abc.com";
      expect(checkUrl(url_input)).toBe(true);
    });
    })
