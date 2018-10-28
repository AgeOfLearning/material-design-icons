import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneTimeToLeaveElement
 * @class IconTwotoneTimeToLeaveElement
 * @extends {AoflElement}
 */
class IconTwotoneTimeToLeaveElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneTimeToLeaveElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-time-to-leave';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneTimeToLeaveElement.is, IconTwotoneTimeToLeaveElement);

export default IconTwotoneTimeToLeaveElement;
