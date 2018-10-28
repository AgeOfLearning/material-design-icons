import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneArrowBackIosElement
 * @class IconTwotoneArrowBackIosElement
 * @extends {AoflElement}
 */
class IconTwotoneArrowBackIosElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneArrowBackIosElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-arrow-back-ios';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneArrowBackIosElement.is, IconTwotoneArrowBackIosElement);

export default IconTwotoneArrowBackIosElement;
