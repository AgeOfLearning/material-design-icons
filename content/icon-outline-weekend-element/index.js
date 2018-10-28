import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineWeekendElement
 * @class IconOutlineWeekendElement
 * @extends {AoflElement}
 */
class IconOutlineWeekendElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineWeekendElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-weekend';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineWeekendElement.is, IconOutlineWeekendElement);

export default IconOutlineWeekendElement;
