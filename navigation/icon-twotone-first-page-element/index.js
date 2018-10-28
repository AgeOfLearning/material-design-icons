import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFirstPageElement
 * @class IconTwotoneFirstPageElement
 * @extends {AoflElement}
 */
class IconTwotoneFirstPageElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFirstPageElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-first-page';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFirstPageElement.is, IconTwotoneFirstPageElement);

export default IconTwotoneFirstPageElement;
