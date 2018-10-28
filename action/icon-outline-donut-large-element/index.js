import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineDonutLargeElement
 * @class IconOutlineDonutLargeElement
 * @extends {AoflElement}
 */
class IconOutlineDonutLargeElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineDonutLargeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-donut-large';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineDonutLargeElement.is, IconOutlineDonutLargeElement);

export default IconOutlineDonutLargeElement;
