import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneEventBusyElement
 * @class IconTwotoneEventBusyElement
 * @extends {AoflElement}
 */
class IconTwotoneEventBusyElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneEventBusyElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-event-busy';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneEventBusyElement.is, IconTwotoneEventBusyElement);

export default IconTwotoneEventBusyElement;
