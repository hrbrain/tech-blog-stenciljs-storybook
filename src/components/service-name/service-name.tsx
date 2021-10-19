import { Component, Host, h, Prop } from '@stencil/core';

import { serviceMaps, ServiceMapsKeys } from './facade';

@Component({
  tag: 'service-name',
  styleUrl: 'service-name.css',
  shadow: true,
})
export class ServiceName {
  @Prop() service: ServiceMapsKeys = 'evaluation';

  render() {
    return (
      <Host>
        <p class="text">{serviceMaps[this.service]}</p>
      </Host>
    );
  }
}
