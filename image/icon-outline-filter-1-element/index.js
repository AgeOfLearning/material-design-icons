import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFilter1Element
 * @class IconOutlineFilter1Element
 * @extends {AoflElement}
 */
class IconOutlineFilter1Element extends AoflElement {
  /**
   * Creates an instance of IconOutlineFilter1Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-filter-1';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFilter1Element.is, IconOutlineFilter1Element);

export default IconOutlineFilter1Element;
