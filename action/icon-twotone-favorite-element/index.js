import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFavoriteElement
 * @class IconTwotoneFavoriteElement
 * @extends {AoflElement}
 */
class IconTwotoneFavoriteElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFavoriteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-favorite';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFavoriteElement.is, IconTwotoneFavoriteElement);

export default IconTwotoneFavoriteElement;
