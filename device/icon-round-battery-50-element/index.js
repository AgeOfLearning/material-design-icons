import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundBattery50Element
 * @class IconRoundBattery50Element
 * @extends {AoflElement}
 */
class IconRoundBattery50Element extends AoflElement {
  /**
   * Creates an instance of IconRoundBattery50Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-battery-50';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundBattery50Element.is, IconRoundBattery50Element);

export default IconRoundBattery50Element;
