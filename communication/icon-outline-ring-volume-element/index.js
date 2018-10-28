import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineRingVolumeElement
 * @class IconOutlineRingVolumeElement
 * @extends {AoflElement}
 */
class IconOutlineRingVolumeElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineRingVolumeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-ring-volume';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineRingVolumeElement.is, IconOutlineRingVolumeElement);

export default IconOutlineRingVolumeElement;
