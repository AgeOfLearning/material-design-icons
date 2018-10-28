import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFilter5Element
 * @class IconOutlineFilter5Element
 * @extends {AoflElement}
 */
class IconOutlineFilter5Element extends AoflElement {
  /**
   * Creates an instance of IconOutlineFilter5Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-filter-5';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFilter5Element.is, IconOutlineFilter5Element);

export default IconOutlineFilter5Element;
