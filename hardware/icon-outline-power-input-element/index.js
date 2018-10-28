import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePowerInputElement
 * @class IconOutlinePowerInputElement
 * @extends {AoflElement}
 */
class IconOutlinePowerInputElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePowerInputElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-power-input';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePowerInputElement.is, IconOutlinePowerInputElement);

export default IconOutlinePowerInputElement;
