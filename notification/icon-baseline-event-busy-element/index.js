import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineEventBusyElement
 * @class IconBaselineEventBusyElement
 * @extends {AoflElement}
 */
class IconBaselineEventBusyElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineEventBusyElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-event-busy';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineEventBusyElement.is, IconBaselineEventBusyElement);

export default IconBaselineEventBusyElement;
