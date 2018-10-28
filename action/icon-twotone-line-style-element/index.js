import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneLineStyleElement
 * @class IconTwotoneLineStyleElement
 * @extends {AoflElement}
 */
class IconTwotoneLineStyleElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneLineStyleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-line-style';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneLineStyleElement.is, IconTwotoneLineStyleElement);

export default IconTwotoneLineStyleElement;
