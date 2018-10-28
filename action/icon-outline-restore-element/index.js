import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineRestoreElement
 * @class IconOutlineRestoreElement
 * @extends {AoflElement}
 */
class IconOutlineRestoreElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineRestoreElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-restore';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineRestoreElement.is, IconOutlineRestoreElement);

export default IconOutlineRestoreElement;
