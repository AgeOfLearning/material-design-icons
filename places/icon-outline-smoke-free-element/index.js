import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSmokeFreeElement
 * @class IconOutlineSmokeFreeElement
 * @extends {AoflElement}
 */
class IconOutlineSmokeFreeElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSmokeFreeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-smoke-free';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSmokeFreeElement.is, IconOutlineSmokeFreeElement);

export default IconOutlineSmokeFreeElement;
