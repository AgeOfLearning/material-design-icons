import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFilterNoneElement
 * @class IconOutlineFilterNoneElement
 * @extends {AoflElement}
 */
class IconOutlineFilterNoneElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineFilterNoneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-filter-none';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFilterNoneElement.is, IconOutlineFilterNoneElement);

export default IconOutlineFilterNoneElement;
