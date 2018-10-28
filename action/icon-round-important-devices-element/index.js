import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundImportantDevicesElement
 * @class IconRoundImportantDevicesElement
 * @extends {AoflElement}
 */
class IconRoundImportantDevicesElement extends AoflElement {
  /**
   * Creates an instance of IconRoundImportantDevicesElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-important-devices';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundImportantDevicesElement.is, IconRoundImportantDevicesElement);

export default IconRoundImportantDevicesElement;
