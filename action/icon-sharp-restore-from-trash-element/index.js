import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpRestoreFromTrashElement
 * @class IconSharpRestoreFromTrashElement
 * @extends {AoflElement}
 */
class IconSharpRestoreFromTrashElement extends AoflElement {
  /**
   * Creates an instance of IconSharpRestoreFromTrashElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-restore-from-trash';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpRestoreFromTrashElement.is, IconSharpRestoreFromTrashElement);

export default IconSharpRestoreFromTrashElement;
