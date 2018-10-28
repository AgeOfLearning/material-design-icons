import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundDevicesOtherElement
 * @class IconRoundDevicesOtherElement
 * @extends {AoflElement}
 */
class IconRoundDevicesOtherElement extends AoflElement {
  /**
   * Creates an instance of IconRoundDevicesOtherElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-devices-other';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundDevicesOtherElement.is, IconRoundDevicesOtherElement);

export default IconRoundDevicesOtherElement;
