import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineTimeToLeaveElement
 * @class IconOutlineTimeToLeaveElement
 * @extends {AoflElement}
 */
class IconOutlineTimeToLeaveElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineTimeToLeaveElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-time-to-leave';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineTimeToLeaveElement.is, IconOutlineTimeToLeaveElement);

export default IconOutlineTimeToLeaveElement;
