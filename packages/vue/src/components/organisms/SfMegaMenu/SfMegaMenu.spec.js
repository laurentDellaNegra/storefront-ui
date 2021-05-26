import { shallowMount } from "@vue/test-utils";
import SfMegaMenu from "./SfMegaMenu.vue";

describe("SfMegaMenu.vue", () => {
  it("render a Mega Menu", () => {
    const component = shallowMount(SfMegaMenu);

    expect(component.contains("section.sf-mega-menu")).toBe(true);
  });

  it("render a Mega Menu default slot", () => {
    const msg = "Mega Menu";

    const component = shallowMount(SfMegaMenu, {
      propsData: { visible: true },
    });
    expect(component.find(".sf-mega-menu").exists()).toBe(true);
  });
});
