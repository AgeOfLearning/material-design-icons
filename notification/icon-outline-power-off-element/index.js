import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePowerOffElement
 * @class IconOutlinePowerOffElement
 * @extends {AoflElement}
 */
class IconOutlinePowerOffElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePowerOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-power-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePowerOffElement.is, IconOutlinePowerOffElement);

export default IconOutlinePowerOffElement;
