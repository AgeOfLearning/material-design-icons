import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpRingVolumeElement
 * @class IconSharpRingVolumeElement
 * @extends {AoflElement}
 */
class IconSharpRingVolumeElement extends AoflElement {
  /**
   * Creates an instance of IconSharpRingVolumeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-ring-volume';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpRingVolumeElement.is, IconSharpRingVolumeElement);

export default IconSharpRingVolumeElement;
