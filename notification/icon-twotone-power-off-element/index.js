import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePowerOffElement
 * @class IconTwotonePowerOffElement
 * @extends {AoflElement}
 */
class IconTwotonePowerOffElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePowerOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-power-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePowerOffElement.is, IconTwotonePowerOffElement);

export default IconTwotonePowerOffElement;
