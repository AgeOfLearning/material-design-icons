import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFavoriteBorderElement
 * @class IconTwotoneFavoriteBorderElement
 * @extends {AoflElement}
 */
class IconTwotoneFavoriteBorderElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFavoriteBorderElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-favorite-border';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFavoriteBorderElement.is, IconTwotoneFavoriteBorderElement);

export default IconTwotoneFavoriteBorderElement;
