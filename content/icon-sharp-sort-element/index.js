import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSortElement
 * @class IconSharpSortElement
 * @extends {AoflElement}
 */
class IconSharpSortElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSortElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-sort';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSortElement.is, IconSharpSortElement);

export default IconSharpSortElement;
