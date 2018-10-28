import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneRestoreElement
 * @class IconTwotoneRestoreElement
 * @extends {AoflElement}
 */
class IconTwotoneRestoreElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneRestoreElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-restore';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneRestoreElement.is, IconTwotoneRestoreElement);

export default IconTwotoneRestoreElement;
