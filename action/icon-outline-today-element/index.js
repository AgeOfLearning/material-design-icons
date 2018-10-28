import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineTodayElement
 * @class IconOutlineTodayElement
 * @extends {AoflElement}
 */
class IconOutlineTodayElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineTodayElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-today';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineTodayElement.is, IconOutlineTodayElement);

export default IconOutlineTodayElement;
