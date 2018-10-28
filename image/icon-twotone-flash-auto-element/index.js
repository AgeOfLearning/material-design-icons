import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFlashAutoElement
 * @class IconTwotoneFlashAutoElement
 * @extends {AoflElement}
 */
class IconTwotoneFlashAutoElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFlashAutoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-flash-auto';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFlashAutoElement.is, IconTwotoneFlashAutoElement);

export default IconTwotoneFlashAutoElement;
