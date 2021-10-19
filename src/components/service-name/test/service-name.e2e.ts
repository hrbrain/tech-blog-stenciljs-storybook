import { newE2EPage } from '@stencil/core/testing';

describe('service-name', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<service-name></service-name>');

    const element = await page.find('service-name');
    expect(element).toHaveClass('hydrated');
  });
});
