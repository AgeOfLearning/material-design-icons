import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePersonPinElement
 * @class IconOutlinePersonPinElement
 * @extends {AoflElement}
 */
class IconOutlinePersonPinElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePersonPinElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-person-pin';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePersonPinElement.is, IconOutlinePersonPinElement);

export default IconOutlinePersonPinElement;
