import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundDevicesElement
 * @class IconRoundDevicesElement
 * @extends {AoflElement}
 */
class IconRoundDevicesElement extends AoflElement {
  /**
   * Creates an instance of IconRoundDevicesElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-devices';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundDevicesElement.is, IconRoundDevicesElement);

export default IconRoundDevicesElement;
