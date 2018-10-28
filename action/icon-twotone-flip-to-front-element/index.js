import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFlipToFrontElement
 * @class IconTwotoneFlipToFrontElement
 * @extends {AoflElement}
 */
class IconTwotoneFlipToFrontElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFlipToFrontElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-flip-to-front';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFlipToFrontElement.is, IconTwotoneFlipToFrontElement);

export default IconTwotoneFlipToFrontElement;
