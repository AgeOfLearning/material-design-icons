import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneArrowRightAltElement
 * @class IconTwotoneArrowRightAltElement
 * @extends {AoflElement}
 */
class IconTwotoneArrowRightAltElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneArrowRightAltElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-arrow-right-alt';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneArrowRightAltElement.is, IconTwotoneArrowRightAltElement);

export default IconTwotoneArrowRightAltElement;
