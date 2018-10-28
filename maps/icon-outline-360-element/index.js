import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutline360Element
 * @class IconOutline360Element
 * @extends {AoflElement}
 */
class IconOutline360Element extends AoflElement {
  /**
   * Creates an instance of IconOutline360Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-360';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutline360Element.is, IconOutline360Element);

export default IconOutline360Element;
