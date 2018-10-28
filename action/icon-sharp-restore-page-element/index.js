import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpRestorePageElement
 * @class IconSharpRestorePageElement
 * @extends {AoflElement}
 */
class IconSharpRestorePageElement extends AoflElement {
  /**
   * Creates an instance of IconSharpRestorePageElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-restore-page';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpRestorePageElement.is, IconSharpRestorePageElement);

export default IconSharpRestorePageElement;
