import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPowerOffElement
 * @class IconRoundPowerOffElement
 * @extends {AoflElement}
 */
class IconRoundPowerOffElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPowerOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-power-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPowerOffElement.is, IconRoundPowerOffElement);

export default IconRoundPowerOffElement;
