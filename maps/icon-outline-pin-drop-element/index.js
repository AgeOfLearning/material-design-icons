import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePinDropElement
 * @class IconOutlinePinDropElement
 * @extends {AoflElement}
 */
class IconOutlinePinDropElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePinDropElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-pin-drop';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePinDropElement.is, IconOutlinePinDropElement);

export default IconOutlinePinDropElement;
