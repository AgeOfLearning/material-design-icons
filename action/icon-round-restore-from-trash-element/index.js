import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundRestoreFromTrashElement
 * @class IconRoundRestoreFromTrashElement
 * @extends {AoflElement}
 */
class IconRoundRestoreFromTrashElement extends AoflElement {
  /**
   * Creates an instance of IconRoundRestoreFromTrashElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-restore-from-trash';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundRestoreFromTrashElement.is, IconRoundRestoreFromTrashElement);

export default IconRoundRestoreFromTrashElement;
