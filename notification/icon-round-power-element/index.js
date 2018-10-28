import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPowerElement
 * @class IconRoundPowerElement
 * @extends {AoflElement}
 */
class IconRoundPowerElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPowerElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-power';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPowerElement.is, IconRoundPowerElement);

export default IconRoundPowerElement;
