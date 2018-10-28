import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFilter9PlusElement
 * @class IconOutlineFilter9PlusElement
 * @extends {AoflElement}
 */
class IconOutlineFilter9PlusElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineFilter9PlusElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-filter-9-plus';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFilter9PlusElement.is, IconOutlineFilter9PlusElement);

export default IconOutlineFilter9PlusElement;
