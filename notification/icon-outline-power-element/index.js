import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePowerElement
 * @class IconOutlinePowerElement
 * @extends {AoflElement}
 */
class IconOutlinePowerElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePowerElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-power';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePowerElement.is, IconOutlinePowerElement);

export default IconOutlinePowerElement;
