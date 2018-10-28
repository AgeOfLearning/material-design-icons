import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneAllInclusiveElement
 * @class IconTwotoneAllInclusiveElement
 * @extends {AoflElement}
 */
class IconTwotoneAllInclusiveElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneAllInclusiveElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-all-inclusive';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneAllInclusiveElement.is, IconTwotoneAllInclusiveElement);

export default IconTwotoneAllInclusiveElement;
