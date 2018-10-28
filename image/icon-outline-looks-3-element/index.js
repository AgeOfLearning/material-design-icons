import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineLooks3Element
 * @class IconOutlineLooks3Element
 * @extends {AoflElement}
 */
class IconOutlineLooks3Element extends AoflElement {
  /**
   * Creates an instance of IconOutlineLooks3Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-looks-3';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineLooks3Element.is, IconOutlineLooks3Element);

export default IconOutlineLooks3Element;
