import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineLooks5Element
 * @class IconOutlineLooks5Element
 * @extends {AoflElement}
 */
class IconOutlineLooks5Element extends AoflElement {
  /**
   * Creates an instance of IconOutlineLooks5Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-looks-5';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineLooks5Element.is, IconOutlineLooks5Element);

export default IconOutlineLooks5Element;
