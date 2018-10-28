import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFilter9PlusElement
 * @class IconTwotoneFilter9PlusElement
 * @extends {AoflElement}
 */
class IconTwotoneFilter9PlusElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFilter9PlusElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-filter-9-plus';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFilter9PlusElement.is, IconTwotoneFilter9PlusElement);

export default IconTwotoneFilter9PlusElement;
