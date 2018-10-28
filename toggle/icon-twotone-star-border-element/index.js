import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneStarBorderElement
 * @class IconTwotoneStarBorderElement
 * @extends {AoflElement}
 */
class IconTwotoneStarBorderElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneStarBorderElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-star-border';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneStarBorderElement.is, IconTwotoneStarBorderElement);

export default IconTwotoneStarBorderElement;
