import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineImportantDevicesElement
 * @class IconBaselineImportantDevicesElement
 * @extends {AoflElement}
 */
class IconBaselineImportantDevicesElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineImportantDevicesElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-important-devices';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineImportantDevicesElement.is, IconBaselineImportantDevicesElement);

export default IconBaselineImportantDevicesElement;
