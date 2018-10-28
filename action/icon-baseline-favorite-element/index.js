import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFavoriteElement
 * @class IconBaselineFavoriteElement
 * @extends {AoflElement}
 */
class IconBaselineFavoriteElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineFavoriteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-favorite';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFavoriteElement.is, IconBaselineFavoriteElement);

export default IconBaselineFavoriteElement;
