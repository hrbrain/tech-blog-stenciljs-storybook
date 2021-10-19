import { newSpecPage } from '@stencil/core/testing';
import { ServiceName } from '../service-name';

describe('service-name', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ServiceName],
      html: `<service-name></service-name>`,
    });
    expect(page.root).toEqualHtml(`
      <service-name>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </service-name>
    `);
  });
});
