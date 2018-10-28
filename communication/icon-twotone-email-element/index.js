import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneEmailElement
 * @class IconTwotoneEmailElement
 * @extends {AoflElement}
 */
class IconTwotoneEmailElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneEmailElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-email';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneEmailElement.is, IconTwotoneEmailElement);

export default IconTwotoneEmailElement;
