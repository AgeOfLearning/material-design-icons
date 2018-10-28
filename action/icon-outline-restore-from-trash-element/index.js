import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineRestoreFromTrashElement
 * @class IconOutlineRestoreFromTrashElement
 * @extends {AoflElement}
 */
class IconOutlineRestoreFromTrashElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineRestoreFromTrashElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-restore-from-trash';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineRestoreFromTrashElement.is, IconOutlineRestoreFromTrashElement);

export default IconOutlineRestoreFromTrashElement;
