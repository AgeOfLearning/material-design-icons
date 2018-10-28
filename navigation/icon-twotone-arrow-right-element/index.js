import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneArrowRightElement
 * @class IconTwotoneArrowRightElement
 * @extends {AoflElement}
 */
class IconTwotoneArrowRightElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneArrowRightElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-arrow-right';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneArrowRightElement.is, IconTwotoneArrowRightElement);

export default IconTwotoneArrowRightElement;
