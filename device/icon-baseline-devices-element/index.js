import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineDevicesElement
 * @class IconBaselineDevicesElement
 * @extends {AoflElement}
 */
class IconBaselineDevicesElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineDevicesElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-devices';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineDevicesElement.is, IconBaselineDevicesElement);

export default IconBaselineDevicesElement;
