import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineRestorePageElement
 * @class IconOutlineRestorePageElement
 * @extends {AoflElement}
 */
class IconOutlineRestorePageElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineRestorePageElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-restore-page';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineRestorePageElement.is, IconOutlineRestorePageElement);

export default IconOutlineRestorePageElement;
