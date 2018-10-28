import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineStarBorderElement
 * @class IconOutlineStarBorderElement
 * @extends {AoflElement}
 */
class IconOutlineStarBorderElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineStarBorderElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-star-border';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineStarBorderElement.is, IconOutlineStarBorderElement);

export default IconOutlineStarBorderElement;
