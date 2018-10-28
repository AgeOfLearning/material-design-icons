import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineDataUsageElement
 * @class IconOutlineDataUsageElement
 * @extends {AoflElement}
 */
class IconOutlineDataUsageElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineDataUsageElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-data-usage';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineDataUsageElement.is, IconOutlineDataUsageElement);

export default IconOutlineDataUsageElement;
