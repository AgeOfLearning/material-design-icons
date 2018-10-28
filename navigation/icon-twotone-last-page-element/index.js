import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneLastPageElement
 * @class IconTwotoneLastPageElement
 * @extends {AoflElement}
 */
class IconTwotoneLastPageElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneLastPageElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-last-page';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneLastPageElement.is, IconTwotoneLastPageElement);

export default IconTwotoneLastPageElement;
