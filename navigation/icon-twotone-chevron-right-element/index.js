import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneChevronRightElement
 * @class IconTwotoneChevronRightElement
 * @extends {AoflElement}
 */
class IconTwotoneChevronRightElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneChevronRightElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-chevron-right';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneChevronRightElement.is, IconTwotoneChevronRightElement);

export default IconTwotoneChevronRightElement;
