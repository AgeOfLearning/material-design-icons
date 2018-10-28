import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneArrowForwardElement
 * @class IconTwotoneArrowForwardElement
 * @extends {AoflElement}
 */
class IconTwotoneArrowForwardElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneArrowForwardElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-arrow-forward';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneArrowForwardElement.is, IconTwotoneArrowForwardElement);

export default IconTwotoneArrowForwardElement;
