import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineDonutSmallElement
 * @class IconOutlineDonutSmallElement
 * @extends {AoflElement}
 */
class IconOutlineDonutSmallElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineDonutSmallElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-donut-small';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineDonutSmallElement.is, IconOutlineDonutSmallElement);

export default IconOutlineDonutSmallElement;
