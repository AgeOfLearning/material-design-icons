import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundTimeToLeaveElement
 * @class IconRoundTimeToLeaveElement
 * @extends {AoflElement}
 */
class IconRoundTimeToLeaveElement extends AoflElement {
  /**
   * Creates an instance of IconRoundTimeToLeaveElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-time-to-leave';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundTimeToLeaveElement.is, IconRoundTimeToLeaveElement);

export default IconRoundTimeToLeaveElement;
