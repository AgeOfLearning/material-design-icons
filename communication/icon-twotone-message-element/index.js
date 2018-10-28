import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneMessageElement
 * @class IconTwotoneMessageElement
 * @extends {AoflElement}
 */
class IconTwotoneMessageElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneMessageElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-message';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneMessageElement.is, IconTwotoneMessageElement);

export default IconTwotoneMessageElement;
