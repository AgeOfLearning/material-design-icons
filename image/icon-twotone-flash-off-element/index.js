import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFlashOffElement
 * @class IconTwotoneFlashOffElement
 * @extends {AoflElement}
 */
class IconTwotoneFlashOffElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFlashOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-flash-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFlashOffElement.is, IconTwotoneFlashOffElement);

export default IconTwotoneFlashOffElement;
