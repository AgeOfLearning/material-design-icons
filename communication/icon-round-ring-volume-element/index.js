import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundRingVolumeElement
 * @class IconRoundRingVolumeElement
 * @extends {AoflElement}
 */
class IconRoundRingVolumeElement extends AoflElement {
  /**
   * Creates an instance of IconRoundRingVolumeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-ring-volume';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundRingVolumeElement.is, IconRoundRingVolumeElement);

export default IconRoundRingVolumeElement;
