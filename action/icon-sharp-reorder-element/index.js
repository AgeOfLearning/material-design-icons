import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpReorderElement
 * @class IconSharpReorderElement
 * @extends {AoflElement}
 */
class IconSharpReorderElement extends AoflElement {
  /**
   * Creates an instance of IconSharpReorderElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-reorder';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpReorderElement.is, IconSharpReorderElement);

export default IconSharpReorderElement;
