import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneRestorePageElement
 * @class IconTwotoneRestorePageElement
 * @extends {AoflElement}
 */
class IconTwotoneRestorePageElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneRestorePageElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-restore-page';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneRestorePageElement.is, IconTwotoneRestorePageElement);

export default IconTwotoneRestorePageElement;
