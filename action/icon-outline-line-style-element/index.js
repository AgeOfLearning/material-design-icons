import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineLineStyleElement
 * @class IconOutlineLineStyleElement
 * @extends {AoflElement}
 */
class IconOutlineLineStyleElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineLineStyleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-line-style';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineLineStyleElement.is, IconOutlineLineStyleElement);

export default IconOutlineLineStyleElement;
