import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineRestoreFromTrashElement
 * @class IconBaselineRestoreFromTrashElement
 * @extends {AoflElement}
 */
class IconBaselineRestoreFromTrashElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineRestoreFromTrashElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-restore-from-trash';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineRestoreFromTrashElement.is, IconBaselineRestoreFromTrashElement);

export default IconBaselineRestoreFromTrashElement;
