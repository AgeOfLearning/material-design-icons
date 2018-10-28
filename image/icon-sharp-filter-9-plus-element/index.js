import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFilter9PlusElement
 * @class IconSharpFilter9PlusElement
 * @extends {AoflElement}
 */
class IconSharpFilter9PlusElement extends AoflElement {
  /**
   * Creates an instance of IconSharpFilter9PlusElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-filter-9-plus';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFilter9PlusElement.is, IconSharpFilter9PlusElement);

export default IconSharpFilter9PlusElement;
