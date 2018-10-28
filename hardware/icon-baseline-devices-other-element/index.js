import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineDevicesOtherElement
 * @class IconBaselineDevicesOtherElement
 * @extends {AoflElement}
 */
class IconBaselineDevicesOtherElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineDevicesOtherElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-devices-other';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineDevicesOtherElement.is, IconBaselineDevicesOtherElement);

export default IconBaselineDevicesOtherElement;
