import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundEventBusyElement
 * @class IconRoundEventBusyElement
 * @extends {AoflElement}
 */
class IconRoundEventBusyElement extends AoflElement {
  /**
   * Creates an instance of IconRoundEventBusyElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-event-busy';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundEventBusyElement.is, IconRoundEventBusyElement);

export default IconRoundEventBusyElement;
