import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineLocalPhoneElement
 * @class IconOutlineLocalPhoneElement
 * @extends {AoflElement}
 */
class IconOutlineLocalPhoneElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineLocalPhoneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-local-phone';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineLocalPhoneElement.is, IconOutlineLocalPhoneElement);

export default IconOutlineLocalPhoneElement;
