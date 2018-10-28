import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpEventAvailableElement
 * @class IconSharpEventAvailableElement
 * @extends {AoflElement}
 */
class IconSharpEventAvailableElement extends AoflElement {
  /**
   * Creates an instance of IconSharpEventAvailableElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-event-available';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpEventAvailableElement.is, IconSharpEventAvailableElement);

export default IconSharpEventAvailableElement;
