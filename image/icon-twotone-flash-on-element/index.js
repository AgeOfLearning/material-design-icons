import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFlashOnElement
 * @class IconTwotoneFlashOnElement
 * @extends {AoflElement}
 */
class IconTwotoneFlashOnElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFlashOnElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-flash-on';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFlashOnElement.is, IconTwotoneFlashOnElement);

export default IconTwotoneFlashOnElement;
