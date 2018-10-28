import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineEventSeatElement
 * @class IconBaselineEventSeatElement
 * @extends {AoflElement}
 */
class IconBaselineEventSeatElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineEventSeatElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-event-seat';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineEventSeatElement.is, IconBaselineEventSeatElement);

export default IconBaselineEventSeatElement;
