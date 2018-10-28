import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneArrowForwardIosElement
 * @class IconTwotoneArrowForwardIosElement
 * @extends {AoflElement}
 */
class IconTwotoneArrowForwardIosElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneArrowForwardIosElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-arrow-forward-ios';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneArrowForwardIosElement.is, IconTwotoneArrowForwardIosElement);

export default IconTwotoneArrowForwardIosElement;
