import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineLooks4Element
 * @class IconOutlineLooks4Element
 * @extends {AoflElement}
 */
class IconOutlineLooks4Element extends AoflElement {
  /**
   * Creates an instance of IconOutlineLooks4Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-looks-4';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineLooks4Element.is, IconOutlineLooks4Element);

export default IconOutlineLooks4Element;
