import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneRingVolumeElement
 * @class IconTwotoneRingVolumeElement
 * @extends {AoflElement}
 */
class IconTwotoneRingVolumeElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneRingVolumeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-ring-volume';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneRingVolumeElement.is, IconTwotoneRingVolumeElement);

export default IconTwotoneRingVolumeElement;
