import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePowerInputElement
 * @class IconTwotonePowerInputElement
 * @extends {AoflElement}
 */
class IconTwotonePowerInputElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePowerInputElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-power-input';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePowerInputElement.is, IconTwotonePowerInputElement);

export default IconTwotonePowerInputElement;
