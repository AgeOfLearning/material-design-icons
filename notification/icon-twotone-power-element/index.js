import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePowerElement
 * @class IconTwotonePowerElement
 * @extends {AoflElement}
 */
class IconTwotonePowerElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePowerElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-power';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePowerElement.is, IconTwotonePowerElement);

export default IconTwotonePowerElement;
