import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFlipToBackElement
 * @class IconTwotoneFlipToBackElement
 * @extends {AoflElement}
 */
class IconTwotoneFlipToBackElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFlipToBackElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-flip-to-back';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFlipToBackElement.is, IconTwotoneFlipToBackElement);

export default IconTwotoneFlipToBackElement;
