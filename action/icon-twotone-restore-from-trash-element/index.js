import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneRestoreFromTrashElement
 * @class IconTwotoneRestoreFromTrashElement
 * @extends {AoflElement}
 */
class IconTwotoneRestoreFromTrashElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneRestoreFromTrashElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-restore-from-trash';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneRestoreFromTrashElement.is, IconTwotoneRestoreFromTrashElement);

export default IconTwotoneRestoreFromTrashElement;
