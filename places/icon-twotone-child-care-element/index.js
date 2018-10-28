import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneChildCareElement
 * @class IconTwotoneChildCareElement
 * @extends {AoflElement}
 */
class IconTwotoneChildCareElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneChildCareElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-child-care';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneChildCareElement.is, IconTwotoneChildCareElement);

export default IconTwotoneChildCareElement;
