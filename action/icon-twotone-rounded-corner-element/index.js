import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneRoundedCornerElement
 * @class IconTwotoneRoundedCornerElement
 * @extends {AoflElement}
 */
class IconTwotoneRoundedCornerElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneRoundedCornerElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-rounded-corner';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneRoundedCornerElement.is, IconTwotoneRoundedCornerElement);

export default IconTwotoneRoundedCornerElement;
