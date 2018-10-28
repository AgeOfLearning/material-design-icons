import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPowerInputElement
 * @class IconRoundPowerInputElement
 * @extends {AoflElement}
 */
class IconRoundPowerInputElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPowerInputElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-power-input';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPowerInputElement.is, IconRoundPowerInputElement);

export default IconRoundPowerInputElement;
