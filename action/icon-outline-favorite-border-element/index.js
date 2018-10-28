import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFavoriteBorderElement
 * @class IconOutlineFavoriteBorderElement
 * @extends {AoflElement}
 */
class IconOutlineFavoriteBorderElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineFavoriteBorderElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-favorite-border';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFavoriteBorderElement.is, IconOutlineFavoriteBorderElement);

export default IconOutlineFavoriteBorderElement;
