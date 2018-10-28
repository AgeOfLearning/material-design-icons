import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneArrowBackElement
 * @class IconTwotoneArrowBackElement
 * @extends {AoflElement}
 */
class IconTwotoneArrowBackElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneArrowBackElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-arrow-back';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneArrowBackElement.is, IconTwotoneArrowBackElement);

export default IconTwotoneArrowBackElement;
