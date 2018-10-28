import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineChildCareElement
 * @class IconOutlineChildCareElement
 * @extends {AoflElement}
 */
class IconOutlineChildCareElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineChildCareElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-child-care';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineChildCareElement.is, IconOutlineChildCareElement);

export default IconOutlineChildCareElement;
