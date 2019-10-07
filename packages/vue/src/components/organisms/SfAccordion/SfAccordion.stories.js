// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";

import SfAccordion from "./SfAccordion.vue";
import SfList from "../SfList/SfList.vue";
import SfMenuItem from "../../molecules/SfMenuItem/SfMenuItem.vue";

// use this to document scss vars
const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: []
};

storiesOf("Organisms|Accordion", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      data: () => {
        return {
          accordions: [
            {
              header: "About Us",
              items: [
                { label: "About us (Magento CMS)", count: "280" },
                { label: "Store locator", count: "34" }
              ]
            },
            {
              header: "Departaments",
              items: [
                { label: "Women fashion", count: "2" },
                { label: "Men fashion", count: "56" },
                { label: "Kidswear", count: "16" },
                { label: "Home", count: "166" },
                { label: "Dogswear", count: "24" }
              ]
            },
            {
              header: "Help",
              items: [
                { label: "Customer service", count: "54" },
                { label: "Size guide", count: "4" },
                { label: "Contact us", count: "76" }
              ]
            }
          ]
        };
      },
      props: {
        multiple: {
          default: boolean("multiple", true)
        },
        firstOpen: {
          default: boolean("firstOpen", true)
        },
        showChevron: {
          default: boolean("showChevron", true)
        },
        transition: {
          default: text("transition", "fade")
        }
      },
      components: { SfAccordion, SfList, SfMenuItem },
      template: `<div :style="{width: '300px'}">
        <SfAccordion :multiple="multiple" :firstOpen="firstOpen" :showChevron="showChevron" :transition="transition">
          <SfAccordionItem v-for="(accordion, i) of accordions" :header="accordion.header" :key="i">
            <SfList>
              <SfListItem v-for="(item, j) of accordion.items" :key="j" style="margin: .25rem 0">
                <SfMenuItem :label="item.label" :count="item.count"/>
              </SfListItem>
            </SfList>
          </SfAccordionItem>
        </SfAccordion>
      </div>`
    }),
    {
      info: {
        summary: `<h2>Usage</h2>
        <pre><code>import { SfAccordion } from "@storefront-ui/vue"</code></pre>
        ${generateStorybookTable(scssTableConfig, "SCSS variables")}`
      }
    }
  );
