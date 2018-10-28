import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFavoriteElement
 * @class IconOutlineFavoriteElement
 * @extends {AoflElement}
 */
class IconOutlineFavoriteElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineFavoriteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-favorite';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFavoriteElement.is, IconOutlineFavoriteElement);

export default IconOutlineFavoriteElement;
