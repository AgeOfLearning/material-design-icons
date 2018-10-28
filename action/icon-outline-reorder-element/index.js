import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineReorderElement
 * @class IconOutlineReorderElement
 * @extends {AoflElement}
 */
class IconOutlineReorderElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineReorderElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-reorder';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineReorderElement.is, IconOutlineReorderElement);

export default IconOutlineReorderElement;
