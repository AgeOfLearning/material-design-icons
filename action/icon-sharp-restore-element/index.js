import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpRestoreElement
 * @class IconSharpRestoreElement
 * @extends {AoflElement}
 */
class IconSharpRestoreElement extends AoflElement {
  /**
   * Creates an instance of IconSharpRestoreElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-restore';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpRestoreElement.is, IconSharpRestoreElement);

export default IconSharpRestoreElement;
