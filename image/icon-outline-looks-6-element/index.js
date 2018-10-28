import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineLooks6Element
 * @class IconOutlineLooks6Element
 * @extends {AoflElement}
 */
class IconOutlineLooks6Element extends AoflElement {
  /**
   * Creates an instance of IconOutlineLooks6Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-looks-6';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineLooks6Element.is, IconOutlineLooks6Element);

export default IconOutlineLooks6Element;
