import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineRingVolumeElement
 * @class IconBaselineRingVolumeElement
 * @extends {AoflElement}
 */
class IconBaselineRingVolumeElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineRingVolumeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-ring-volume';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineRingVolumeElement.is, IconBaselineRingVolumeElement);

export default IconBaselineRingVolumeElement;
