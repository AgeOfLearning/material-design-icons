import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneStarElement
 * @class IconTwotoneStarElement
 * @extends {AoflElement}
 */
class IconTwotoneStarElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneStarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-star';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneStarElement.is, IconTwotoneStarElement);

export default IconTwotoneStarElement;
