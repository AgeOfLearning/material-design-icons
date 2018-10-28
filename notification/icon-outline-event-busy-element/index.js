import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineEventBusyElement
 * @class IconOutlineEventBusyElement
 * @extends {AoflElement}
 */
class IconOutlineEventBusyElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineEventBusyElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-event-busy';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineEventBusyElement.is, IconOutlineEventBusyElement);

export default IconOutlineEventBusyElement;
