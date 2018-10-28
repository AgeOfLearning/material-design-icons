import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpEventBusyElement
 * @class IconSharpEventBusyElement
 * @extends {AoflElement}
 */
class IconSharpEventBusyElement extends AoflElement {
  /**
   * Creates an instance of IconSharpEventBusyElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-event-busy';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpEventBusyElement.is, IconSharpEventBusyElement);

export default IconSharpEventBusyElement;
