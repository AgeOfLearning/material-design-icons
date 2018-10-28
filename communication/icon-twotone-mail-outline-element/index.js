import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneMailOutlineElement
 * @class IconTwotoneMailOutlineElement
 * @extends {AoflElement}
 */
class IconTwotoneMailOutlineElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneMailOutlineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-mail-outline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneMailOutlineElement.is, IconTwotoneMailOutlineElement);

export default IconTwotoneMailOutlineElement;
